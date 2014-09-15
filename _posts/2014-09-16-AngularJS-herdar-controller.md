---
title: Herdar controllers no AngularJS
layout: post_entry
image: /media/javascript.png
excerpt: Herdar controllers e extender a $scope
categories:
 javascript
---

Tenho usado directivas como o angular-wizard para fazer uma página com etapas. É muito semelhante a usar páginas parciais com o ui-router, tens um controller principal e os herdeiros herdam a $scope

Precisei de ter um controller base e herdar para outros dois mas a extender a função. Para isso usamos o .extend nativo do AngularJS.

{% highlight javascript %}
function baseController = function($scope, bibleService, $state) {
	$scope.svc = new bibleService('KING-JAMES');

	$scope.close = function(){ 
		$state.go('home'); 
	};
};
{% endhighlight}

{% highlight javascript %}
function kidsController = function($scope) {
	angular.extend(this, new bibleController($$scope, bibleService, $state));

	$scope.recommended = {
		book: 'John'
		chapter: '3',
		verse: '16'
	}
	
	$scope.nextRecommended= function(){
		$scope.recommended = $scope.svc.getNextRecommended();
	};

	$scope.end = function(){
		$scope.close(); // inherited from baseController
	};
};

{% endhighlight}

{% highlight javascript %}
function adultsController = function($scope, bibleService, $state) {
	angular.extend(this, new bibleController($$scope, bibleService, $state));

	$scope.dailyStudy = {
		studyId: 264,
		votes: 2222
	};

	$scope.nextDailyStudy = function(){
		$scope.svc.nextDailyStudy();
	};
};
{% endhighlight}