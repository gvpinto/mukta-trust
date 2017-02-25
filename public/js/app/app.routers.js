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
                    "header": {
                        templateUrl: '../templates/header.html'
                    },
                    "body": {
                        templateUrl: '../templates/home.html'
                    },
                    "footer": {
                        templateUrl: '../templates/footer.html'
                    }
                },
                controller: 'HomeCtrl as ctrl',
                resolve: {
                    menuItems: ['NavigationService', function(NavigationService) {
                        NavigationService.setActiveMenuIndex(0); // index for home
                        return NavigationService.getMenuItems();
                    }]
                }
            })
            .state('about-us', {
                url: '/about-us',
                views: {
                    "header": {
                        templateUrl: '../templates/header.html'
                    },
                    "body": {
                        templateUrl: '../templates/about-us.html'
                    },
                    "footer": {
                        templateUrl: '../templates/footer.html'
                    }
                },
                resolve: {
                    menuItems: ['NavigationService', function(NavigationService) {
                        NavigationService.setActiveMenuIndex(1); // index for about-us
                        return NavigationService.getMenuItems();
                    }]
                }
            })
            .state('contact-us', {
                url: '/contact-us',
                views: {
                    "header": {
                        templateUrl: '../templates/header.html'
                    },
                    "body": {
                        templateUrl: '../templates/contact-us.html'
                    },
                    "footer": {
                        templateUrl: '../templates/footer.html'
                    }
                },
                resolve: {
                    menuItems: ['NavigationService', function(NavigationService) {
                        NavigationService.setActiveMenuIndex(2); // index for contact-us
                        return NavigationService.getMenuItems();
                    }]
                }
            })
            .state('sign-in', {
                url: '/sign-in',
                views: {
                    "header": {
                        templateUrl: '../templates/header.html'
                    },
                    "body": {
                        templateUrl: '../templates/sign-in.html'
                    },
                    "footer": {
                        templateUrl: '../templates/footer.html'
                    }
                },
                resolve: {
                    menuItems: ['NavigationService', function(NavigationService) {
                        NavigationService.setActiveMenuIndex(3); // index for sign-in
                        return NavigationService.getMenuItems();
                    }]
                }
            })
            .state('sign-up', {
                url: '/sign-up',
                views: {
                    "header": {
                        templateUrl: '../templates/header.html'
                    },
                    "body": {
                        templateUrl: '../templates/sign-up.html'
                    },
                    "footer": {
                        templateUrl: '../templates/footer.html'
                    }
                },
                resolve: {
                    menuItems: ['NavigationService', function(NavigationService) {
                        NavigationService.setActiveMenuIndex(4); // index for sign-up
                        return NavigationService.getMenuItems();
                    }]
                }
            });


        // HomeCtrl.$inject = [$,]
        function HomeCtrl() {

        }


    }
})();