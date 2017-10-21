/*global define*/
'use strict';

define(['angular', 'app'], function (angular, app) {

	app.directive("commonHeader", function () {
		return {
			restrict: "EA",
			replace: true,
			transclude: true,
			templateUrl: "/header.html",
			controller:  'HeaderCtrl'
		};
	});

	app.controller("HeaderCtrl", function ($scope, $location) {
		console.log('HeaderCtrl working');
		$scope.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };
	});
	
});