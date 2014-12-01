(function() {
    var app = angular.module('leancuke', ['ngRoute']);
    app.controller('HomeController', function() {
        this.message = "This is home page!";
    });
    app.controller('AboutController', function() {
        this.message = "This is about page!";
    });
    app.controller('ContactController', function() {
        this.message = "This is contact page!";
    });
    app.config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'resources/partials/home.html',
            controller: 'HomeController'
        }).when('/about', {
            templateUrl: 'resources/partials/about.html',
            controller: 'AboutController'
        }).when('/contact', {
            templateUrl: 'resources/partials/contact.html',
            controller: 'ContactController'
        }).otherwise({
            redirectTo: '/404'
        });
    });
})();