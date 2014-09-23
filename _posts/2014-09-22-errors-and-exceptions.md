---
title: Lidar com erros e excepções
layout: post_entry
image: /media/angular-thumb.jpg
excerpt:
categories:
 software
---

Lembro-me de ter publicado alguns sites que mandavam o relatório das excepções como resultado sempre que alguma coisa corria mal.

Eu utilizo excepções para lidar com erros e validações da aplicação. Por exemplo, para validação de entrade de dados (classes DTO que uso e populo dinamicamente com funções auxiliares e alguma refactoração) eu não vou criar uma excepção diferente para cada tipo de erro que possa existir como MinLengthException, NumericLowerException, etc.

Preferia usar algo assim

{% highlight php %}
<?php

class UserConfirmException : Exception {
	protected $userId;

	public function __construct($trace) {
		$this->userId = $trace['userId'];
	}

	public function getUserId(){
		return $this->userId;
	}
}
{% endhighlight %}

Neste caso como valido campos dinâmicos:

{% highlight php %}
<?php

class UserService : BaseRest {
	
	public function confirm(){

	}
}
{% endhighlight %}


{% highlight php %}
<?php

class UserConfirmValidator : AbstractValidator {
	
	public function __construct($request) {
		$this->request = $request;
	}

	public function assert(){
		$validated = SomeLibrary::validate($this->request);
		if($validate->hasError()) {
			throw new UserConfirmException($validate->errorTrace())
		}
	}
}
{% endhighlight %}

O método assert vai invocar a excepção