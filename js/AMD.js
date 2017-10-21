/*global require*/
'use strict';

require.config({
	baseUrl: 'js',
	paths: {
		jquery : 'https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
		angular : 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular.min',
		ngAnimate : 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular-animate.min',
		ngCookies : 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular-cookies.min',
		ngResource : 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular-resource.min',
		ngRoute : 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular-route.min',
		ngSanitize : 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular-sanitize.min',
		ngTouch : 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular-touch.min',
		ngBootstrap : 'http://bootzee.com/js/ui-bootstrap-tpls-0.11.2',
		app: 'app',
	},
	shim: {
		jquery: { exports: '$'},
		angular: { exports: 'angular', },
		ngAnimate: { exports: 'ngAnimate', deps: ['angular'] },
		ngCookies: { exports: 'ngCookies', deps: ['angular'] },
		ngResource: { exports: 'ngResource', deps: ['angular'] },
		ngRoute: { exports: 'ngRoute', deps: ['angular'] },
		ngSanitize: { exports: 'ngSanitize', deps: ['angular'] },
		ngTouch: { exports: 'ngTouch', deps: ['angular'] },
        ngBootstrap: { exports: 'ngBootstrap', deps: ['angular'] }
	}
});

require(
	[
	// Dependencies from lib
		'angular', 
		'ngRoute',
		'ngBootstrap',
		'ngSanitize',
		'ngAnimate',
	// Angular directives/controllers/services
		'app',
		'commonRoutes',
		'header',
		'viewHomeController'
	], 
	function (angular) {
		var AppRoot = angular.element(document.getElementById('ng-app'));
		AppRoot.attr('ng-controller','AppCtrl');
		angular.bootstrap(document, ['app']);
	}
);