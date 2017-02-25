(function () {
    angular.module('mukta-trust')
        .service('NavigationService', NavigationService);

    NavigationService.$inject = ['$http', '$q'];

    function NavigationService($http, $q) {
        var service = this;

        var menuItems;
        var activeMenuIndex = 0;

        service.getMenuItems = function () {

            var deferred = $q.defer();

            if (!menuItems) {

                // TODO: replace with the real server call;
                setTimeout(function () {
                    menuItems = [{
                        name: 'Home',
                        url: 'home',
                        active: true // default
                    }, {
                        name: 'About Us',
                        url: 'about-us',
                        active: false
                    }, {
                        name: 'Contact Us',
                        url: 'contact-us',
                        active: false
                    }, {
                        name: 'Sign up',
                        url: 'sign-up',
                        active: false
                    }, {
                        name: 'Sign in',
                        url: 'sign-in',
                        active: false
                    }];
                    deferred.resolve(menuItems);
                }, 1000);

            } else {
                deferred.resolve(menuItems);
            }

            return deferred.promise;
        };

        service.setActiveMenuIndex = function (index) {
            activeMenuIndex = index;
        };

        service.getActiveMenuIndex = function() {
            return activeMenuIndex;
        }


    }

})();

