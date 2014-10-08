---
title: Encurtador de URL com o redis e nginx
layout: post_entry
image: /media/angular-thumb.jpg
excerpt: 
categories:
 bower
---


http://uberblo.gs/2011/06/high-performance-url-shortening-with-redis-backed-nginx
Precisei de implementar uma solução para encurtar urls, semelhante ao [Google Shortener][https://goo.gl/].

A primeira questão foi qual linguagem utilizar. Por ser algo tão simples ia para python mas encontrei uma implementação do [Mendelson][https://github.com/MendelGusmao] que utiliza o redis para guardar a informação em memória ram, e um servidor nginx. Este servidor nginx lida com a api usando **location** e  


#### GET /api/shortner

A resposta HTTP
	* Código de estado: 301
	* Cabecário Location



https://gist.github.com/MendelGusmao/2356310