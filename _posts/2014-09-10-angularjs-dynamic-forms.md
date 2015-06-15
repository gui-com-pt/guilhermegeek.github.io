---
title: AngularJS and dynamic forms
layout: post_entry
image: /media/angular-thumb.jpg
description: Um padrão em AngularJS para implementar formulários dinamicamente
categories:
 angularjs
---


Existem situações em que tenho de lidar com dados dinamicamente no angularjs.

Vou mostrar um exemplo. Temos:

 - formulário de contacto
 - formulário de pagamento
 - formulário de entrega

Todos têm campos em comum. Nome, morada, BI, etc podem variar na mesma encomenda entre os três formulários. Quero copiar essa informação em comum.

{% highlight html %}
<h3>Contact</h3>
<form novalidate>
    <div>
        <label>Name</label>
        <input type="text" ng-model="contact.name" required />
    </div>
    <div>
        <label>Nick Name</label>
        <input type="text" ng-model="contact.nickName" required />
    </div>
    <div>
        <label>Address</label>
        <input type="text" ng-model="contact.address" required />
    </div>
    <div>
        <button ng-click="copyContactForm()">Copy to others forms</form>
    </div>
</form>

<h3>Delivery</h3>
<form novalidate>
    <div>
        <label>Name</label>
        <input type="text" ng-model="delivery.name" required />
    </div>
    <div>
        <label>Address</label>
        <input type="text" ng-model="delivery.address" required />
    </div>
</form>

<h3>Billing</h3>
<form novalidate>
    <div>
        <label>Name</label>
        <input type="text" ng-model="billing.name" required />
    </div>
    <div>
        <label>Address</label>
        <input type="text" ng-model="billing.address" required />
    </div>
</form>
{% endhighlight %}


{% highlight javascript %}
var primForm = 'contact';
var secForms = ['billing', 'delivery'];

$scope.copyContactForm = function(){
    // Loop through contact object properties
    angular.forEach($scope[primForm], function(value, key) {
        // Loop through secondary forms
        angular.forEach(secForms, function(bValue) {
            // acess the secondary form, property. Assign the original value from primForm property
            $scope[bValue][key] = value;
        });
    });
};
{% endhighlight %}

Idealmente isto seria disponibilizado num serviço passando o formulário primário e os principais, opções como capitalização dos nomes dos campos e uniformização, etc.