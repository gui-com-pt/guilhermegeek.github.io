var app = angular.module('codigo', ['pi']);

var newsletterService = function($) {

};

var mailchimp = function($http) {
	var fn = function(apiKey){
		this.apiKey = apiKey;
	};

	fn

	return fn;
};

(function(){
	var ROOT, request, states;

	request = {

	};

	states = {
		1: 'OPENEDED',
		2: 'HEADERS_RECEIVED',
	    3: 'LOADING',
	    4: 'DONE'
	};


	var mandrill = (function(){
		function Mandrill = (function(apiKey){
			this.apiKey = apiKey;
		})();
	});
})