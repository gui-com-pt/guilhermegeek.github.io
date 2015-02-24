---
title: AngularJS - Padrão de Design do Observador
layout: post_entry
image: /media/angular-thumb.jpg
excerpt: 
categories:
 angularjs
---

Um dos pontos fortes do AngularJS é a ligação entre duas propriedades automática. Se um controlador referir uma propriedade de um serviço e essa propriedade alterar no lado do serviço, a alteração é propagada e o controlador é notificado.

E quando tal ligação não existe? Usando o exemplo de um plugin jQuery, ele não vai interpolar com o AngularJS e mesmo que altere valores na view essas alterações não vão referir na aplicação. 

## Padrão de Design do Observador ###

O padrão de design do Observador permite a um assinante registar e receber notificações de um provedor. Vamos usar um exemplo, com um serviço do AngularJS:


	var service = function(){
		var callbacks = [];

		var notifyCallbacks = function(){
			angular.forEach(callbacks, function(callback) {
				callback();
			});
		};

		this.registerCallback = function(callback) {
			this.callbacks.push(callback);
		};
	};

	var controller = function(service, $scope) {
		$scope.callable = function(){
			console.log('$scope.callable invoded');
		};

		service.registerCallback($scope.callable);
	};


Assim o serviço consegue notificar o controlador de alterações invocando o método **notifyCallbacks**.