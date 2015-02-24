---
title: AngularJS - Extender um provedor injectando um serviço
layout: post_entry
keywords: angularjs
categories:
 angularjs
---

Um provedor (provider) no AngularJS distingue se de um serviço ou fábrica (factory) por puder ser acedido durante a configuração da aplicação, no método **config**. Já o serviço e fábrica apenas são acessidos no método **run** quando a aplicação é iniciada.

Apesar de o AngularJS não permitir isto nativamente, ou pelo menos não da forma mais elegante, é possível injectar um serviço num provedor durante a configuração da aplicação. 

Para percebermos a utilidade disto vamos imaginar o seguinte exemplo. A aplicação **bible** tem vários serviços para mostrar a biblia em diferentes traduções. Quando ocorre um erro usamos o serviço **errorHandlerService** para mostrar uma caixa de diálogo ao utilizador. Extender a forma como lidamos com estes erros significa puder usar outro serviço senão o **errorHandlerService** para lidar com as mensagens de erro, poderia ser uma caixa de alerta por exemplo. Para este exemplo teríamos os seguintes componentes:

	var errorHandlerService = function(modalService){
		this.display = function(response){
			modalService.open(response.message);
		};
	};

	var homeController = function(errorHandlerService, api) {
		api.getHome()
			.then(function(res) {
				// Ok, sem erros
			}, function(res) {
				errorHandlerService.display(res);
			});
	};


Se quisermos alterar a forma como a mensagem de erro é mostrada ao utilizador temos de modificar directamente o serviço **errorHandlerService**. Este serviço não é extensível.

Podemos usar antes um provedor para mostrar as mensagens de erro, e injectamos o método **display** do serviço **errorHandlerService** para mostrar as mensagens. Mais tarde, pudemos usar outro serviço sem termos de modificar o código do **errorHandlerService**.

	var errorHandlerProvider = function(){
		var errorHandler;

		this.setHandler = function(handler) {
			errorHandler = handler;
		}

		this.$get = function(){
			return {
				display: errorHandler
			}
		}
	}

	var config = function(errorHandler) {
		var injector = angular.injector(['app']),
			service = injector.get('errorHandlerService');

		errorHandler.setHandler(service.display);
	};

	var homeController = function(errorHandlerProvider, api) {
		api.getHome()
			.then(function(res) {
				// Ok, sem erros
			}, function(res) {
				errorHandlerProvider.display(res);
			});
	};

Não me agrada muito esta solução por ter resolver a dependência do serviço **errorHandlerService** através do injector do AngularJS. No entanto é fiável porque funciona e permite-nos alterar a forma como vamos mostrar as mensagens, num exemplo mais real usaríamos um serviço para a versão mobile que interaja com a API do telemovel e outro para o site que mostre a caixa de diálogo.