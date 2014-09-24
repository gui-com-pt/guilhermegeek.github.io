---
title: Programação - Introdução
layout: post_entry
image: /media/angular-thumb.jpg
excerpt: 
categories:
 programacao
---

"Que linguagem de programação me aconselhas?" ou "Isso de programador é que é vida, passar o dia todo sentado" já fazem parte do meu quotidiano.

Neste artigo quero fazer uma breve introdução a linguagens de programação e ao que esta carreira representa.

### Linguagens

Eu comecei a programar em TCL e depois fiquei uns anos a programar para web com PHP e C#. Há cerca de 1/2 anos comecei a lidar mais com linguagens como Python e shell que me têm ajudado a evoluir bastante enquanto programador.

#### PHP + Hack

Hack, yes! Grande prenda da equipa do Facebook, esta linguagem é baseada no PHP mas muito mais direccionada a OOO.

Para mim as principais vantagens são os tipos anónimos e funções com o retorno definido, por exemplo

{% highlight php %}
<?php

/**
 * @return User
 */
function getUser(){
	return new User();
}
{% endhighlight %}

Em PHP é assim que consigo ter o IDE a utilizar a auto completação. Tenho de anotar a função com o retorno. Em hack a história é outra

{% highlight php %}
<?h

function User getUser(){
	return new User();
}
{% endhighlight %}

#### Bibliotecas e Frameworks

Para mim isto era a única razão pela qual fiquei tanto tempo no .NET, por causa das bibliotecas que temos disponíveis. 

Isto tem bastante peso na escolha de uma linguagem para determinado projecto. Vai ser opensource? Temos disponibilidade do cliente para pagar serviços de desenvolvimento? Está em questão a compatibilidade entre plataformas?


O ServiceStack é um excelente exemplo de como uma framework pode ser o suficiente para matar um projecto. Até há pouco tempo esta framework era opensource mas sempre com a licença BSD. Uma framework excelente direccionada a webservices e com metadologias e propostas de desenho muito boas mesmo.

Na actualização da versão 3 para 4 alteraram os planos, passou a ser e apenas a versão 3 se manteve como BSD. O que aconteceu a quem tem projectos suportados nesta framework? São clientes da 4 ou vão ter de fazer um fork da 3 :)

Já me aconteceu utilizar bibliotecas que já nem eram mantidas, ou que secalhar não são tão boas quanto isso. Podem ter uma API que utilizemos sem problema e satisfaça as necessidades mas o código sofrer de má programação. 


### Programador

Semelhantemente a um doutor que é especializado em determinadas áreas um programador também o é. Especializa-se 