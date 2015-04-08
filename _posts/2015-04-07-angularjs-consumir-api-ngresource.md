---
title: AngularJs consumir APIS com o ngResource
layout: post_entry
image: /media/angular-thumb.jpg
excerpt: 
categories:
 angularjs
---

No Angular temos o serviço **$http** para consumir APIs e pedidos HTTP no geral retorando promessas.

Já o **$resource** é distribuído num módulo à parte, o **ngResource**. Dá-te a possibilidade de seguir uma abordagem de modelos de data.

Eu gosto de usar o **$resource** para ligar com os dados no ladod o AngularJS.

O método **query** espera receber um array. Apesar de isto puder ser alterado, este deve de facto ser a implementação a seguir. Este tipo de modelos podes injectar num controlador e através da view acederes a eles. Imagina o seguinte:

	<div ng-repeat="verses in bible.verses.query()">
		<p ng-bind="verse.message"></p>
	</div>

Esta abordagem também permite que objectos implementem métodos próprios e os possamos chamar no exemplo de cima. Neste caso o objecto **verse** teria um método como **verse.findSimilar()**.


### Transformar a resposta ###

O mais provável é que a API não retorne um array na resposta em métodos de pesquisa. Há outros campos importantes a incluir na resposta como indicar se há mais resultados, informação recebida  por um mecanismo de pub/sub, etc.

Para esses casos transformamos a resposta de modo a que o **$resource.query** se mantenha como um array e o possamos usar como no exemplo de cima.

	var fn = function($resource) {
	    return $resource('/api/bible/:id',
	        {},
	        {
	            'query': {
	                method: 'GET',
	                transformResponse: function(res) {
	                    return angular.fromJson(res).verses || [];
	                },
	                isArray: true
	            }
	        });
	};
	fn.$inject = ['$resource'];
	angular
	    .module('bible')
	    .factory('BibleResource', fn);