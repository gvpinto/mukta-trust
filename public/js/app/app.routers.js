(function () {
    'use strict';
    angular.module('mukta-trust')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        // Default Router
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    "home-header": {
                        templateUrl: '../templates/home-header.html'
                    }
                },
                resolve: {
                    menuItems: ['NavigationService', function(NavigationService) {
                       return NavigationService.getMenuItems();
                    }]
                }
            })
            .state('about-us', {
                url: '/',
                views: {
                    "about-us-header": {
                        templateUrl: '../templates/home-header.html'
                    }
                }
            })
            .state('contact-us', {
                url: '/',
                views: {
                    "contact-us-header": {
                        templateUrl: '../templates/home-header.html'
                    }
                }
            })
            .state('sign-in', {
                url: '/',
                views: {
                    "sign-in-header": {
                        templateUrl: '../templates/home-header.html'
                    }
                }
            })
            .state('sign-up', {
                url: '/',
                views: {
                    "sign-up-header": {
                        templateUrl: '../templates/home-header.html'
                    }
                }
            });



    }
})();