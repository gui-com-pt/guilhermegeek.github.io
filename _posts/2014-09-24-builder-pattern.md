---
title: Padrão Builder 
layout: post_entry
image: /media/angular-thumb.jpg
description: Padrão Factory Method e Creator
categories:
 padrao-projeto
---
Padrão Factory Method

Este padrão é talvez o mais conhecido de todos os padrões de projecto publicado no "Design Patterns: Elements of Reusable Object-Oriented Software". Foi quando li este livro que comecei a programar.

A função dos padrões Factory é encapsular a criação de objectos. 

O Factory Method tem a particularidade de encapsular a criação de objectos e deixar as sub classes decirem quais os objectos criados

Este é o teste unitário com que vamos testar o código


{% highlight php %}
public class Bible {
	
	public function getVerses($bookId, $chapter, $fromVerse, $toVerse = null) {
		// etc
	}
}
{% endhighlight %}


{% highlight php %}
public abstract class BibleCreator {
	public function factoryMethod($version);

	public $bible;
}
{% endhighlight %}


**Creator** - Define a estrutura principal a ser herdada por todos os construtores. 

Temos o método abstracto **factoryMethod()** que é utilizado pelas sub classes para criarem um objecto Bible. Também podemos criar mais métodos a serem implementados, um exemplo seria um **getBible()** que retornava o objecto Bible


{% highlight php %}
public class JfrAlmeidaBible : Bible {
	
	public function factoryMethod(){
		$bible = new Bible(); 
		// etc 
		return $bible;
	}
}
{% endhighlight %}

Este é o constructor concreto. Herda o Creator (Bible) sendo assim uma sub class que referi em cima, implementa o método **factoryMethod()** para criar o objecto.

Person


ConcretPerson



## Director

Constroi o um objecto utilizando a interface do builder. 

## Builder

