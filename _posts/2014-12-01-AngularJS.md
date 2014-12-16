---
title: Boas práticas em AngularJS
layout: post_entry
image: /media/angular-thumb.jpg
description: Aprende boas práticas do AngularJS e mantém o teu código compreensível
keywords: angular angularjs boas praticas javascript 
categories:
 angularjs
---

Neste artigo vou demonstrar boas práticas para trabalhar com o AngularJS. O resultado final vai ser este:

<iframe height='350' scrolling='no' src='http://codepen.io/guilhermecardoso/embed/LEGpmY/' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/guilhermecardoso/pen/LEGpmY/'>LEGpmY</a> by Guilherme Cardoso (<a href='http://codepen.io/guilhermecardoso'>@guilhermecardoso</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

Como os restantes artigos eu vou actualizando à medida que tenho tempo, por isso esta versão inicial pode ser confusa.

### Isolamento

Para isolar ao máximo os contextos, sempre que escrevo um controlador, um serviço, uma directia uso uma expressão de função imediatamente-invocada. Podes ler mais aqui: [Expressão de Função Imediatamente-Invocada (IIFE)](http://www.codigo.ovh/javascript/pattern/2014/09/10/javascript-iife.html)


Tudo que existir dentro da função não está acessível aos contextos parentes, neste caso o global.

Neste exemplo eu apenas deixo no contexto global a ``app``

	var app = angular.module('web', ['ngRoute']);
	(function(){

	})();

### Problema de minificadores

É bastante comum em tutoriais ver-mos exemplos assim:

	angular.module('web').controller('homeCtrl', function($scope) {
		$scope.message = 'message';
	});

Este código não apresenta erros e é válido mas vamos supor que queremos minificar o código com uma ferramenta. Essa ferramenta vai alterar os nomes das variáveis e o resultado será este:

	angular.module('web').controller('homeCtrl', function(s) {
		s.message = 'message';
	});

Agora o AngularJS não vai conseguir injetar a $scope. Isto é esperado e não é nenhum erro, na verdade a ferramenta está a fazer bem o seu trabalho a minificar. 

Uma solução será enviar uma array com as dependências e só no final a função a ser executada.

	angular.module('web').controller('homeCtrl', ['$scope', function($scope) {
		$scope.message = 'message';
	}]);

Na primeira entrada da array a $scope é passada numa string, o que significa que o minificador vai deixar o valor intacto. Já na variável da função ele vai substituír a $scope mas não há problema, pois o AngularJS sabe que a primeira variável é a $scope, independentemente do nome que a variável tiver. O resutlado é este:

	angular.module('web').controller('homeCtrl', ['$scope', '$rootScope', function(s, r) {
		s.message = 'message';
	}]);

A variável ``s`` é a $scope e a ``r`` a $rootScope. Quando recebe um array, o AngularJS sabe que o último valor é sempre a função e vai resolver as dependências pelos valores passados no array.


### Outra estratégia

O último exemplo é compatível com o minificador e é válido mas outra alternativa a meu ver mais correta é ao chamar a função ``controller`` passar apenas o nome do controlador e a sua função. As dependências são injetadas na função e declaradas sempre na propriedade ``$inject``.

Vamos examinar o exemplo do controller ``homeCtrl``

	(function(){
	  
	  var cntrlFn = function($log, sharedService) {
	    var self = this;
	    self.$log = $log;
	    self.service = sharedService;
	  };

	  cntrlFn.$inject = ['$log', 'sharedService'];
	  app.controller('homeCtrl', cntrlFn);
	})();


Quando atribuo a função à variável cntrlFn tento criar o método main. Registo as dependências na função com o ``this``.

Todos os métodos que quiser implementar no controller faço-o com o prototype, por exemplo o método refresh e logout:

	(function(){
	  
	  var cntrlFn = function($log, sharedService) {
	    var self = this;
	    self.$log = $log;
	    self.service = sharedService;
	  };

	  cntrlFn.prototype.refresh = function(){
	  	var self = this;
	  	self.$log('refreshed');
	  };

	  cntrlFn.prototype.logout = function(){
	  	window.location = '/logout';
	  };

	  cntrlFn.$inject = ['$log', 'sharedService'];
	  app.controller('homeCtrl', cntrlFn);
	})();


A documentação é uma das razões pela qual gosto de estruturar assim o código. É mais fácil
### controllerAs

Neste exemplo eu não estou a expor os membros do controller na ``$scope``. Isto começou na versão 1.2 porque a $scope acabava por representar o próprio controller, e torna-se mais intuitívo utilizar o ``this`` no controller para declarar as propriedades e ficarem acessíveis na página.


Tanto o ``$routeProvider`` como o ``$stateProvider`` do módulo ui-router suportam o controllerAs da seguinte forma:

	$routeProvider.when('/', {
		controller: 'homeCtrl',
		controllerAs: 'ctrl'
	});

	$stateProvider.state('home', {
		url: '/',
		controller: 'homeCtrl',
		controllerAs: 'ctrl'
	});

O controller fica acessível através do ``ctrl``

	<div ng-bind="ctrl.message"></div>