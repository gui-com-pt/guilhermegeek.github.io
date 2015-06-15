---
title: Nginx - Proteger pastas e urls com autenticação HTTP
layout: post_entry
image: /media/angular-thumb.jpg
excerpt: 
description: Nginx - Este tutorial mostra-te como podes proteger uma pasta ou um segmento de URL com utilizador-password.
categories: 
 nginx
---

Este tutorial mostra-te como podes proteger uma pasta ou um segmento de URL com utilizador-password.

Proteger uma pasta com este tipo de autenticação não é muito comum em ambientes com este servidor web. O nginx não é só conhecido pela sua performance vs Apache2, a escabilidade e melhorias de performance que proporciona é através de módulos, hacks como scripts em LUA e Redis (sem ter de passar pelo código PHP, exemplo: Auth). Em ambientes assim raramente a autenticação provém de um .htpasswd.

O nginx não tem nenhuma ferramenta para gerar a autenticação e encriptar a password. Ela está distribuída nos utilitários do Apache (não tens de instalar o apache2!).

	sudo apt-get install apache2-utils

## Criar Utilizador e Password

Vamos guardar as credenciais na pasta **/etc/nginx/.htpasswd

	sudo htpasswd -c /etc/nginx/.htpasswd utilizador

Ele pergunta a password

New password:
Re-type new password:
Adding password for user utilizador

Á partida o directório **/etc/nginx** tem as permissões certas. Senão for esse o caso garante-las

	chown nginx /etc/nginx/.htpasswd


## Configuração

{% highlight bash %}
server {
  listen       80;
  server_name  localhost;
  location / {
      root   /var/www/exemplo;
      index  index.html;
      auth_basic "Restricted";
      auth_basic_user_file /etc/nginx/.htpasswd;
  }
}
{% endhighlight %}