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
                resolve: {
                    menuItems: ['NavigationService', function(NavigationService) {
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
                }
            });



    }
})();