(function() {
    var app = angular.module('leanCukeApp', ['ngRoute']);
    app.config([

        function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'pages/home.html',
                controller: 'homeController'
            }).when('/about', {
                templateUrl: 'pages/about.html',
                controller: 'aboutController'
            }).when('/contact', {
                templateUrl: 'pages/contact.html',
                controller: 'contactController'
            });
        }
    ]);
    app.controller('homeController', ['',
        function() {
        	this.pageName = "This is home page!";
        }
    ]);
    app.controller('aboutController', ['',
        function() {
        	this.pageName = "This is about page!";
        }
    ]);
    app.controller('contactController', ['',
        function() {
        	this.pageName = "This is contact page!";

        }
    ]);
})();