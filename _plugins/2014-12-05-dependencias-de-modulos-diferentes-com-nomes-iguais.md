---
title: AngularJS - Dependências de módulos diferentes com nomes iguais
layout: post_entry
image: /media/less.jpg
excerpt: Introdução a CSS com LESS utilizando o Bootstrap
description: Quando uma aplicação cresce pode haver colisão de dependências com o mesmo nome. Aprende a resolvê-las!
categories:
 angularjs
---

### AngularJS - Dependências de módulos diferentes com nomes iguais

Por norma, os serviços começados com **$** percentem ao núcleo do AngularJS. Alguns exemplos: $scope, $rootScope, $locationProvider do módulo ``ngRoute``.

Quando existem nomes iguais de um serviço, diretiva, controlador, a injecção é resolvida pela ordem com que são os módulos dependentes. 


	angular.module('moduleOne', []).service('bible', function(){});

	angular.module('moduleTwo', ]).service('bible', function(){})

	angular.module('app', ['moduleOne', 'moduleTwo'])
			.controller('homeCtrl', ['bible', function(bible) {}])


O serviço ``bible`` injetado no controlador é o do módulo moduleTwo por ele ter sido declarado no array depois do moduleOne. No caso de saber-mos que um serviço com o mesmo nome deve provir de determinado módulo, a posição desse módulo no array deve ser depois dos outros com um serviço com o mesmo nome.

No entanto este comportanto apesar de ser esperado não é uma boa forma de resolvermos o problema. O ideal é especificar qual o módulo do qual queremos injetar o serviço ``bible`` utilizando o ``injector()``

	angular.module('app', ['moduleOne', 'moduleTwo'])
			.controller('homeCtrl', ['$injector', function($injector) {
					var mod = angular.injector(['moduleOne']);
					var bible = mod.get('bible');
				}]);