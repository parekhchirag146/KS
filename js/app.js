/*global define*/
'use strict';

// Hook up all modules to the 'app' module
// Returns TheApp (see commonRoutes.js for usage)
define(['angular'], function (angular) {
    
    angular.module('HashBangURLs', ['ngRoute']).config(['$locationProvider', function($location) {
        $location.hashPrefix('!');
	}]);
	
    angular.module('HTML5ModeURLs', ['ngRoute']).config(['$locationProvider', function($location) {
        $location.html5Mode(true);
    }]);
    
    // Choose to inject either HashBangs or HTML5 mode, your preference.
	var app = angular.module('app', ['HashBangURLs', 'ui.bootstrap', 'ngSanitize', 'ngAnimate'], function ($routeProvider, $locationProvider, $httpProvider) {

	});
	
	app.directive("commonFooter", function () {
		return {
			restrict: "EA",
			replace: true,
			transclude: true,
			templateUrl: "/footer.html"
		};
	});
	
	app.controller("AppCtrl", function ($scope, $log, $q, $timeout, $http, $interval) {
        console.log("AppCtrl working");
        $scope.tabs = [
            { title:'Tab 1', content:'Dynamic content 1' },
            { title:'Tab 2', content:'Dynamic content 2' },
            { title:'Tab 3', content:'Dynamic content 3' }
        ];
        $scope.testimonials = [];
        
        $http.get('/json/testimonials.json')
         .success(function (data) {
             $scope.testimonials = data;
         })
         .error(function(data, status, headers, config) {
             console.log(status);
             console.log(data);
         });
         
         $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return ($scope.currentIndex/2) === index;
        };
        
        var timer = $interval(function(){
                $scope.currentIndex++;
                if ($scope.currentIndex>5) $scope.currentIndex=0;
            }, 2000);
    });

	return app;

});