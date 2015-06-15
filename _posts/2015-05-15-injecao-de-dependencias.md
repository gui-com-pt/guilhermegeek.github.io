---
title: Abordagem rápida a Injecção de Dependências
layout: post_entry
image: /media/hacker1.jpg
categories: hack
description: Abordagem rápida a Injecção de Dependências em linguagens de programação
categories: php hhvm
---

Este tema é muito familiar a qualquer programador, seja de Javascript ou C++

Existem várias bibliotecas para resolver a injecção de dependências. Aqui a linguagem com que programamos influencia bastante as abordagens tomadas até agora

Em C# raramente escreves um texto com o nome da classe, a menos que queiras atribuir um nome novo. Simplesmente passas o tipo como anónimo. Como o código em C# é rodeado de interfaces para libertar a memória como a `IDisposable` a injecção de dependências leva outro nível.

## PHP

Em PHP a conversa é outra! Mesmo sendo uma linguagem dinâmica é possível resolver os tipos com reflecção, anotações da documentação, ficheiros de configuração ou como eu prefiro: no construtor do objecto.

O que me tenho apercebido é que no final de contas a inversão de controlo torna-se má graças ao que escrevemos.

Em vários casos deparo-me comigo em situações deste caso:

{% highlight bash %}
+---------+      +---------+
|    A    |<-----|    B    |
|         |      |         |
|         |----->|         |
+---------+      +---------+
{% endhighlight %}

Por exemplo um objecto que guarda informações dos objectos ligados com a biblioteca da base de dados (nome das tabelas, associações, etc) e outro que guarda colecções de alterações (inserções, actualizações, etc) e realizadas em BATCH.

Em muitos casos reparo-me no caso da referência circular como neste exemplo. Ambos os objectos dependem do outro. O mais engraçado é que existe uma regra que **se aplica mesmo**. Em situações destas eu sei que está-me a faltar um terceiro objecto no mínimo.

Se há tanta dependência entre duas classes talvez uma tenha apenas alguns métodos para auxiliar a outra. É sempre uma má decisão nossa do design da aplicação!

A sugestão é simples: compara os métodos da Classe A usados pela A e da B usados pela A. Depois o inverso, e o que tiver a lista mais pequena essa é a tua terceira classe.

{% highlight bash %}
  +---------+      +---------+
  |    A    |<-----|  B      |
  |         |      |  |  +-+ |
  |         |      |  +->|C| |
  |         |------+---->| | |
  |         |      |     +-+ |
  +---------+      +---------+
{% endhighlight %}

Isto permite-nos identificar a classe nova **C**. É comum chamar-lhe de classe escondida, pois sempre esteve embutida na trapalhada da B e nós não reparávamos sequer senão fosse por um stackoverflow do injector ou outro erro que fosse ocorrer.

{% highlight bash %}
                           +---------+
  +---------+              |    B    |
  |    A    |<-------------|         |
  |         |              |         |
  |         |    +---+     |         |
  |         |--->| C |<----|         |
  |         |    +---+     +---------+
  +---------+
{% endhighlight %}

Por isso mesmo a maioria das bibliotecas em PHP até recomendam mesmo a usar um ficheiro de configuração. A linguagem não é estática, há que tratá-la como tal

## HHVM e Implementações

O Hacklang ainda vai trazer mais novidades ao mundo "novo" paralelo ao PHP normal. Apesar de já implentar genéricos eles não são como seríamos de esperar em C#.

O HHVM não é estático como o C# e isso é a razão porque estes problemas ocorrem mas a equipa do Facebook já garantiu que esse dia vai chegar. É uma implentação com um nome confuso (vi numa resposta no Stackoverflow de um programador deles) e que não é prioritária por isso não será para breve.

No entanto já podemos fazer muita coisa com esta implementação de genéricos. Na reflecção temos a propriedade **typed_hint** que nesta implementação de IOC nos permite agrupar as dependências por tipos e categorias. O tipo real criado em tempo de execução não dá para resolver (exemplo: TRepository, TValidator, etc).

A minha implementação favorita para IOC com HHVM é usar a injecção no construtor dos Serviços. Não deve ser no Controlador porque isso garante o fim total da portabilidade.


**Referências**

- [http://misko.hevery.com/2008/08/01/circular-dependency-in-constructors-and-dependency-injection/](http://misko.hevery.com/2008/08/01/circular-dependency-in-constructors-and-dependency-injection/)Dos meus textos favoritos da matéria, simples e pode ajudar muito programador. E já lá vão uns anitos!
