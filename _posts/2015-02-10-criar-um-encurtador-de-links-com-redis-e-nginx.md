---
title: Encurtador de URL com o redis e nginx - super rápido!
layout: post_entry
image: /media/angular-thumb.jpg
description: Encurtador de URL com o redis e nginx - super rápido!
categories:
 redis nginx
---


Precisei de implementar uma solução para encurtar urls, semelhante ao [Google Shortener](https://goo.gl/).

A primeira questão foi qual linguagem utilizar. Por ser algo tão simples ia para python mas encontrei uma implementação do [Mendelson](https://github.com/MendelGusmao) que utiliza o redis para guardar a informação em memória ram, e um servidor nginx.

Para melhorar o resultado de performance deste projeto, a ligação entre o servidor web nginx e a base de dados redis onde a informação é guardada, é feita no nível do nginx usando LUA. Isto é uma vantagem muito grande, pois evita que tenhamos de correr código PHP ou outra linguagem qualquer para lidar com o negócio das operações que pode ser muito bem tratado apenas no nginx. 

No entanto esta aplicação é simples e não tem implementado nenhum sistema de autenticação ou validação dos urls.


Original: [https://gist.github.com/MendelGusmao/2356310](https://gist.github.com/MendelGusmao/2356310)

* Baseado em on http://uberblo.gs/2011/06/high-performance-url-shortening-with-redis-backed-nginx
* A usar código de from http://stackoverflow.com/questions/3554315/lua-base-converter
 
**Esquema da Base de Dados**

0. id -> url
1. id -> contador
2. id -> referer / user_agent
3. id -> contador (when id is not found)
4. id -> referer / user_agent (quando o id não é encontrado)
5. chave "count" guarda o número de urls encurtados; o id é gerado (este número + 1) e convertido para base 62


		server {
		 
		  location ~ ^/retrieve$ {
		    internal;
		 
		    redis2_query get $request_uri;
		 
		    redis2_pass 127.0.0.1:6379;
		  }
		 
		  location ~ ^/count$ {
		    internal;
		 
		    redis2_query select 5;
		    redis2_query get count;
		 
		    redis2_pass 127.0.0.1:6379;
		  }
		 
		  location ~ ^/history$ {
		    internal;
		 
		    redis2_query select 1;
		    redis2_query incr $request_uri;
		 
		    redis2_query select 2;
		    redis2_query rpush $request_uri "$http_referer|$http_user_agent";
		 
		    redis2_pass 127.0.0.1:6379;
		  }
		 
		  location ~ ^/notfound$ {
		    internal;
		 
		    redis2_query select 3;
		    redis2_query incr $request_uri;
		 
		    redis2_query select 4;
		    redis2_query rpush $request_uri "$http_referer|$http_user_agent";
		 
		    redis2_pass 127.0.0.1:6379;
		  }
		 
		  location ~ ^/store$ {
		    internal;
		 
		    redis2_query select 0;
		    set_unescape_uri $id $arg_id;
		    set_unescape_uri $url $arg_url;
		    redis2_query set $id $url;
		 
		    redis2_query select 5;
		    redis2_query incr count;
		 
		    redis2_pass 127.0.0.1:6379;
		  }
		 
		  location ~ ^/shorten/(?<url>.*)$ {
		    auth_basic "Restricted";
		    auth_basic_user_file /etc/nginx/.htpasswd;
		 
		    add_header Content-Type text/plain;
		 
		    content_by_lua '
		      local parser = require "redis.parser"
		      local res = ngx.location.capture("/count")
		      local results, type = parser.parse_replies(res.body, 2)
		 
		      basen = function(n, b)
		        n = math.floor(n)
		        if not b or b == 10 then return tostring(n) end
		        local digits = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
		        local t = {}
		        local sign = ""
		        if n < 0 then
		          sign = "-"
		          n = -n
		        end
		        repeat
		          local d = (n % b) + 1
		          n = math.floor(n / b)
		          table.insert(t, 1, digits:sub(d, d))
		        until n == 0
		        return sign .. table.concat(t,"")
		      end
		 
		      local id = basen(results[2][1] + 1, 62)
		 
		      ngx.location.capture("/store",
		        { args = { id = "/"..tostring(id), url = ngx.var.url } }
		      )
		 
		      ngx.say("http://" .. ngx.var.host .. "/" .. id)
		    ';
		  }
		 
		  location / {
		    content_by_lua '
		      local parser = require "redis.parser";
		      local res = ngx.location.capture("/retrieve");
		      local href, type = parser.parse_reply(res.body);
		      if type == parser.ERROR_REPLY or href == nil then
		        ngx.location.capture("/notfound");
		        ngx.exit(ngx.HTTP_NOT_FOUND);
		      else
		        ngx.location.capture("/history");
		        ngx.redirect(href); 
		      end
		    ';
		  }
		 
		}
