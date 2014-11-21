---
title: Introdução ao padrão BEM em CSS
layout: post_entry
excerpt: Escolher nomes para as classes com lógica e seguindo um padrão recomendado, que ajuda a manutenção da folha de estilo e evita a poluição com nomes repetidos
description Precisas de organizar o teu código CSS! O Padrão BEM é focado em blocos e ideal para reaproveitar
image: /media/less.jpg
categories: css
---

Primeiro, porque precisamos de uma metadalogia para CSS sequer? 
Vamos a um exemplo, um widget da última noticia repetido várias vezes na mesma página:

{% highlight html %}
<div class="news">
<div class="left">
	<ul class="main_list">
		<li class="highlithed">first</li>
		<li>second</li>
	</ul>
</div>
<div class="right">
	<h4 class="header">News</h4>
	<div class="body"></div>
</div>
</div>
{% endhighlight %}

Isto é muito comum e normalmente traduz-se numa folha de estilo semelhante a:

{% highlight css %}
.news { }
.news .left { }
.news .left.hidden { }
.news .main_list {}
.news .highlighted {}
.news .header {}
.news .body {}
{% endhighlight %}


Num projecto pequeno onde apenas tu trabalhes no frontend isto não vai gerar confusão, mas se ficar complexo e cada página tiver uma folha de isto corres o risco de usar um .news, .left sem querer e afectar o resto do código. Sabes que o news indica o módulo, o componente principal (utilizador, noticias, etc) mas o restante é apenas atribuir nomes diferentes para não entrarem em colisão. E chega o ponto em que poluíste o contexto e já tens classes em elementos que não querias.

Se trabalhares com alguém então precisam de ter uma metadologia para seguirem em comum, ou pelo menos um padrão defenido com certa lógica.

O que mais adoro em código é padrões e arquitecturas e para este caso temos o BEM - Block Element Modifier

{% highlight html %}
<div class="news">
<div class="news__left">
	<ul class="news__main_list">
		<li class="news__main_list_item--highlithed">first</li>
		<li class="news__main_list_item">second</li>
	</ul>
</div>
<div class="news__right">
	<h4 class="news__header">News</h4>
	<div class="news__body"></div>
</div>
</div>
{% endhighlight %}

{% highlight css %}
.news { }
.news__left { }
.news__left--hiden { }
.news__main_list { }
.news__main_list_item--highlighted { }
.news__header { }
.news__body { }
{% endhighlight %}


É mais rápido porque o browser não precisa de lidar com duas classes e bastante mais ligível!


 * **.news** O block representa um componente. 
 * **.news__left** O elemento é o elemento em si que estamos a trabalhar, seja um botão, uma caixa de texto, um texto diferente do resto. O conjunto de elementos formam o componente (apesar de o componente puder usar outros estilos comuns)
 * **.news__main_list_item--hightlighted** O modificador pode alterar o estado do bloco, neste exemplo do elemento até.

O padrão é usar __ para separar o bloco e elemento e -- para representar um estado diferente.

Cada classe pertence a um elemento e torna tudo muito mais simples. Programadores adoram este tipo de conceitos trazidos para o lado do cliente, torna tudo mais organizado :)

<img src="/media/posts/head-marked2.jpg" />

Créditos da imagem: Smashing Magazine


Uma pequena nota, porque usar a class horrível news__main_list_item--highlithed e não fazer simplesmente .news__main_list li? Gosto de abstrair a folha de estilo o quanto possível do tipo de elemento do DOM. Neste caso é uma lista mas pode ser reaproveitado para outro elemento numa div por exemplo, isto mais a passar paginas de web para mobile.


Se formos a ver no primeiro exemplo que mostrei, as classes não fazem muito sentido e não encontramos uma ligação entre elas que nos indiquem que pertencem ao mesmo bloco ou grupo. A menos que estivessem juntas na folha de estilo e comentadas, tería dificuldades.

A seguir o BEM ou outro padrão qualquer com que te identifiques, mesmo que seja muito diferente e pouco convencional, só o facto de seguires um padrão já é muito bom e torna tudo uniformizado, dás nomes seguindo uma lógica.

### É feio!

Ok é justo, compreendo que á primeira vista .layout-container__right_sidebar--hidden seja grande e feio.
Mas eu em programação no servidor também uso getParentDetailsStatus e recurso-me a usar abreviaturas ou palavras mais curtas só para não ficar feio. Mesmo no PHP que não compilamos o código, é praticamente insigificante para o interpretador e mesmo que seja mais tarde podes minificar tudo. 