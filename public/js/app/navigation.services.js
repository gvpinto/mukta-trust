(function () {
    angular.module('mukta-trust')
        .service('NavigationService', NavigationService);

    NavigationService.$inject = ['$http', '$q'];

    function NavigationService($http, $q) {
        var service = this;

        var menuItems;

        service.getMenuItems = function() {

            var deferred = $q.defer();

            if (!menuItems) {

                // TODO: replace with the real server call;
                setTimeout(function () {
                    menuItems = [{
                        name: 'Home',
                        url: ''
                    }, {
                        name: 'About Us',
                        url: 'about-us'
                    }, {
                        name: 'Contact Us',
                        url: 'contact-us'
                    }, {
                        name: 'Sign up',
                        url: 'sign-up'
                    }, {
                        name: 'Sign in',
                        url: 'sign-in'
                    }];
                    deferred.resolve(menuItems);
                }, 1000);

            } else {
                deferred.resolve(menuItems);
            }

            return deferred.promise;
        }

    }

})();

