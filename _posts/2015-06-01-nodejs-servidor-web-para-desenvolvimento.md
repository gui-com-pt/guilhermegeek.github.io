---
title: NodeJS - Servidor web para desenvolvimento 
layout: post_entry
image: /media/angular-thumb.jpg
description: NodeJS - Servidor HTTP rápido para desenvolvimento e testes
categories:
 nodejs web
---


Neste artigo vou mostrar um servidor Web que tenho usado bastante. Quando comecei a desenvolver plataformas reparei-me que várias vezes queria testar os produtos em versões diferentes, correr em ambientes diferentes, com estados diferentes do sistema, etc.

Durante algum tempo copiava e colava as configurações do **nginx**, alterava os hostname e os directórios principais e assim testava a coisa.

Há relativamente pouco tempo procurei por uma solução mais rápida. Existem centenas de programas deste tipo mas o [**http-server**](https://www.npmjs.com/package/http-server) é o meu favorito. O ideal é instalares globalmente com o NodeJS para puderes usar em qualquer sítio.

{% highlight bash %}
npm install http-server -g
{% endhighlight %}

Respeitando a norma comum que num directório de um projeto, o código a ser distrubuído está na pasta **public** ele primeiro tenta servir os pedidos através da pasta **./public** e apenas senão existirem é que serve do directório onde está a ser corrido **./**.

{% highlight bash %}
http-server 
{% endhighlight %}

O proveito que tiro deste servidor web é muitas vezes clonar projetos de um repositório e configurar logo o servidor web em apenas um comando, sem ter de me preocupar com outras configurações. Como a maioria dos produtos PHP que testo desconhecem ao máximo o ambiente em que são corridos, pormenores como cabeçários, formato do pedido HTTP, etc não se tormam um problema.

<img src="/media/posts/nodejs-http-server.png" />