---
title: Como utilizar cantos arredondados e fazer circulos com CSS?
layout: post_entry
image: /media/javascript.png
description: Aprende a fazer circulos apenas com CSS sem usares nenhum plugin 

categories:
 css html
---

Em CSS a propriedade **border-radius** permite adicionar cantos arredondados a elementos e ficam visíveis quando o elemento tem uma cor de fundo.

O valor do raio pode ser definido em percentagem. Usando 50% conseguimos criar um circulo

<iframe height='350' scrolling='no' src='http://codepen.io/guilhermecardoso/embed/bNdKaw/' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/guilhermecardoso/pen/bNdKaw/'>bNdKaw</a> by Guilherme Cardoso (<a href='http://codepen.io/guilhermecardoso'>@guilhermecardoso</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

O valor do border-radius pode ser aplicado de várias formas:

 * 1 valor - aplicado aos 4 cantos
 * 2 valores - primeiro valor é aplicado aos canto superior esquerdo e inferior direito, segundo valor é aplicado ao canto superior direito e inferior esquerdo.
 * 4 valores - primeiro aplicado ao superior esquerdo, segundo ao superior direito, terceiro ao inferior direito e o quarto ao inferior esquerdo

<iframe height='350' scrolling='no' src='http://codepen.io/guilhermecardoso/embed/bNdKLB/' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/guilhermecardoso/pen/bNdKLB/'>bNdKLB</a> by Guilherme Cardoso (<a href='http://codepen.io/guilhermecardoso'>@guilhermecardoso</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>


Sobre a utilização dos prefixos dos vendedores que uso no exemplo recomendo esta leitura: http://css-tricks.com/do-we-need-box-shadow-prefixes/

É importante referir que a utilização de valores percentuais on Safari apenas é suportado na versão 5.1 para cima e no Opera 11.5 para cima. 

Também existe uma falha em alguns navegadores Android 4+ com a utilização de apenas um valor no border-radius http://stackoverflow.com/questions/17944749/border-radius-style-doesnt-work-in-android-browser

Recursos:

 * [CSS Tricks](http://css-tricks.com/almanac/properties/b/border-radius/)