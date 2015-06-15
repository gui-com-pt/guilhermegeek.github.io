---
title: Lidar com erros e excepções
layout: post_entry
image: /media/angular-thumb.jpg
description: PHP - Lidar com erros e excepções
categories:
 software
---

Lembro-me de ter publicado alguns sites que mandavam o relatório das excepções como resultado sempre que alguma coisa corria mal.

Eu utilizo excepções para lidar com erros e validações da aplicação. Por exemplo, para validação de entrade de dados (classes DTO que uso e populo dinamicamente com funções auxiliares e alguma refactoração) eu não vou criar uma excepção diferente para cada tipo de erro que possa existir como MinLengthException, NumericLowerException, etc.

Preferia usar algo assim

{% highlight php %}
<?php

class UserNotConfirmedException : Exception {
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
		$validator = new UserConfirmValidator($this->request);
		$validator->assert();
	}
}
{% endhighlight %}


{% highlight php %}
<?php

class UserConfirmValidator : AbstractValidator {
	
	public function __construct($request) {
		$this->request = $request;
	}

	public function validate() {
		return SomeLibrary::validate($this->request);
	}

	public function assert(){
		$validate = $this->validate() 
		if($validate->hasError()) {
			throw new UserNotConfirmedException($validate->errorTrace())
		}
	}
}
{% endhighlight %}

O método assert vai invocar a excepção