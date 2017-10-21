/*global define*/
'use strict';

// set up base routes
define(['angular', 'app'], function (angular, app) {

	return app.config([ '$routeProvider', function ($routeProvider) {

		$routeProvider
			.when('/', {templateUrl: '/home.html', controller:  'ViewHomeController'})
			.when('/about', {templateUrl: '/about.html'})
			.when('/contact', {templateUrl: '/contact.html'})
			.otherwise({redirectTo: '/'});

	}]);
	
});