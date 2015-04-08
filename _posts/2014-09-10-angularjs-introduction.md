---
title: AngularJS - Introdução
layout: post_entry
image: /media/angular-thumb.jpg
excerpt: Uma introdução não muito simples ao AngularJS. Recomendado a quem já usa esta framework mas ainda não conseguiu entender bem a arquitectura
categories:
 angularjs
---

Criar uma aplicação web e mobile com angularjs
==========
Cada módulo é configurado com o método **config**. Nesta fase não temos acesso a $rootScope porque ainda não foi criada.

Nesta fase o próprio url não foi traduzido para um controller sequer. É ideal para carregar depêndencias também.
O método **run** inicia a aplicação e já tem acesso à $rootScope. 

        angular.
            module('biblia').
            config([function(){
            }].
            run(['$rootScope', '$http', function($rootScope, $http) {
                $rootScope
            });

#### Services e factories #####
Um service retorna sempre uma nova instância fazendo uso de **new**. 
Uma factory age como um singleton, uma instância única que é partilhada

        angular.module('biblia').service('bibliaSvc', ['$rootScope', '$http', function($rootScope, $http) {
                var books = ['genesis', 'exodo'];
                return {
                    getVersions: function(){

                    },
                    find: function(version, phrase) {

                    },
                    getChapter: function(version, book, chapter) {

                    },
                    getVerse: function(version, book, chapter, verse) {

                    },
                    findVerses: function(version, book, chapter, verseFrom, verseTo) {
                        $http.get('/bible-online.com/query?book=' + book + '&chapter=' + chapter + '&from=' + verseFrom + '&verseTo=' + verseTo)
                            .result.then(function(res) {

                            }, function(res) {

                            });
                    }
                };

            }).
            controller('homeCtrl', ['bibleSvc', '$scope', function(bibleSvc, $scope) {
                $scope.find = function() {
                    bibleSvc.findVerses($scope.version, $scope.book, $sc)
                };
            });



Esta é a estrutura que adopto em projectos maiores, em que eu sei que vou usar várias views parciais e até os controladores têm sempre um service associado.


 * app
   * biblia
      * pesquisar.html
      * pesquisar.js
      * pesquisar-livros.html
      * editar.html
      * editar.js
      * service.js
      * module.js
   * inicio
      * inicio.html
      * inicio.js
   * contacto
      * contacto.html
      * contacto.js
   * comuns
      * publicidade
          * normal.html
          * normal.js
          * service.js
   * module
 * tests
 * bower_components


Eu divido em módulos quando se trata de uma entidade do dominio da aplicação. Por exemplo num blog, teria o modulo **blog**, **blog.artigo** e **blog.tutorial**.
Quando crio um novo módulo para componentes deste gênero faço os roteamentos, configurações dos serviços, dentro do **config** de cada módulo. Ajuda também a manter o código

### Controller ###

Por vezes dou por mim a validar dados e lógica num controller, ou até mesmo a utilizar terceiros recursos como consumir apis.
Há código que lida directamente com os objectos na $scope como uma função que ordene uma lista ou que actualize dados na view. Se usarmos uma factory, como se trata de uma instância os controllers podem usar a factory e partilharem a mesma instância.

### Brodcasting and Emit ###
Tanto o **$broadcast** como o **$emit** implementam uma arquitectura de eventos, a diferença está na direcção da propagação no esquema do angular.

* $brodcast - Emite um evento a todos os descendentes. No caso de $rootScope.$broadcast propaga todos os pontos que acessadam ao $rootScope como o controllers e directives.
* $emit - Emite um evento a todos os parentes.

Exemplo
A nossa aplicação vai ligar-se por uma websocket a um servidor. Esse servidor vai publicar novas notícias.
A aplicação mostra as notícias no controller noticiaCtrl e a directive ultimaNoticia mostra a noticia mais recentes.
Quando o servidor publicar uma nova notícia, a nossa aplicação vai receber esse evento e propagar no evento publicar. 


    angular.module('biblia').run(['websocket', function(websocket) {
        websock.onMessage(function(res) {

        });
    }]);

    angular.module('biblia').controller('noticiasCtrl', ['$scope', '$rootScope', function(res) {
        $scope.$on('publicar', function(res) {
            $scope.$apply(function() {
                $scope.noticias.push(res.noticia);
            });
        });
    }]);

    angular.module('biblia').directive('ultimaNoticia', [function() {
        return {
            link: function(attr, elem, scope) {
                scope.$on('publicar', function(res) {
                    scope.nome = res.noticia.nome;
                    scope.imagemUrl = res.noticia.imagemUrl;
                    scope.uri = res.noticia.uri;
                });
            }
        };
    }]);