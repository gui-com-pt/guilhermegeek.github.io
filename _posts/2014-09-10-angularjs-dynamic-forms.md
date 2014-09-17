---
title: AngularJS and dynamic forms
layout: post_entry
image: /media/angular-thumb.jpg
excerpt: A pattern i use to include dynamic forms in angularjs
categories:
 angularjs
---

There're situations where i have to do things dynamically in angular.

I'll show a simple example. We've a contact form, billing form and delivery form. Both forms have common fields. I want to copy the common data from contact to others forms

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