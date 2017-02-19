(function () {
    angular.module('mukta-trust')
        .component('topNav', {
            templateUrl: '../../templates/top-nav.component.html',
            bindings: {
                activeMenu: '@'
            },
            controller: TopNavComponentController
        });

    TopNavComponentController.$inject = ['$element', 'NavigationService'];

    function TopNavComponentController($element, NavigationService) {
        var $ctrl = this;

        $ctrl.$onInit = function() {
            console.log('$onInit');
            if (!$ctrl.menuItems) {
                NavigationService.getMenuItems()
                    .then(function (items) {
                        console.log('items: ', items);
                        $ctrl.menuItems = items
                    })
                    .catch(function (error) {
                    // TODO: Error handling
                    });
            }
        }
    }

})();