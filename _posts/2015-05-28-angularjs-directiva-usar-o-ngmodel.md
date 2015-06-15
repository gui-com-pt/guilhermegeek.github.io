---
title: AngularJS - Directiva a usar o ngModel (exemplo de envio de imagem)
layout: post_entry
image: /media/angular-thumb.jpg
description: AngularJS - Utiliza o ng-model nas tuas directivas para facilmente partilhares o valor
categories:
 angular
---

O atributo **ng-model** permite ligar um valor do controller à view numa ligação de 2 pontos - se alterar a view no controlador altera, e vice versa.

Quando se trata de formulários é costume ter os campos do formulário no mesmo objecto, por exemplo ``ng-model="addModel.firstName"``. Podemos criar directivas que para usar o ngModel.

Neste exemplo vamos dar a opção da nossa directiva indicar um template novo a ser usado. Em casos em que posso ou não substituir o template da directiva (não falo do replace: true que usamos na directiva, esse substitui o elemento completo da directiva) uso uma técnica simples: incluir o template por atributos, e usar o ngInclude para o fazer dinâmicamente.

{% highlight javascript %}
(function(){
    'use strict';
    var UploadThumbnail = function(Upload){

        var linkFn = function(scope, elem, attrs, ngModel){
            var self = this;

            attrs.$observe('ngModel', function(value){ // Got ng-model bind path here
              scope.$watch(value,function(newValue){ 
                  scope.thumbnailSrc = _.isString(ngModel.$viewValue) ? ngModel.$viewValue : '/images/default-image.jpg';
              });
           });

            scope.$watch('files', function () {
                scope.upload(scope.files);
            });

            scope.upload = function (files) {

                if (files && files.length) {
                    for (var i = 0; i < files.length; i++) {
                        var file = files[i];
                        Upload.upload({
                            url: '/api/images',
                            file: file
                        }).progress(function (evt) {
                            scope.uploadProgress = parseInt(100.0 * evt.loaded / evt.total);
                        }).success(function (data, status, headers, config) {
                            ngModel.$setViewValue(data.uri);
                            scope.thumbnailSrc = data.uri;
                        });
                    }
                }
            };

            scope.getTemplate = function(){
                if(!_.isUndefined(attrs.piTemplate)){
                    return attrs.piTemplate;
                }

                return '/html/upload-thumbnail.html';
            }
        };

        return {
            require: '^ngModel',
            link: linkFn,
            template: '<ng-include class="upload-thumbnail" src="getTemplate()"></ng-include>'
        }
    };

    UploadThumbnail.$inject = ['Upload'];

    angular
        .module('web')
        .directive('uploadThumbnail', UploadThumbnail);

})();
{% endhighlight %}

Este exemplo é de uma directiva que envia imagens para um serviço externo usando o **Upload** e mantém o URL da imagem no ngModel.

Há várias formas de alcançar isto. Neste caso observamos o próprio valor do atributo ngModel para saber quando actualizar o valor da thumbnailSrc na scope da directiva. Prefiro ter o valor na scope e lidar com ele na directiva assim do que aceder directamente ao ngModel.

Um exemplo para a utilização da directiva seria:

{%highlight html %}
<form>
<div class="form-group">
<button ng-model="createModel.thumbnailSrc" upload-thumbnail>Enviar Miniatura</button>
{% raw %}<img ng-src="{{createModel.thumbnailSrc}}" />{% endraw %}
</div>
<div class="form-group">
<input type="text" ng-model="createModel.firstName" required />
</div>
<div class="form-group">
<input type="text" ng-model="createModel.lastName" required />
</div>
</form>
{% endhighlight %}