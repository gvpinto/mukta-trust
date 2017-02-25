(function () {
    angular.module('mukta-trust')
        .component('topNav', {
            templateUrl: 'js/components/templates/top-nav.component.html',
            bindings: {
                activeMenu: '@'
            },
            controller: TopNavComponentController
        });

    TopNavComponentController.$inject = ['$element', 'NavigationService'];

    function TopNavComponentController($element, NavigationService) {
        var $ctrl = this;
        $ctrl.isHome = true;
        $ctrl.activeMenuIndex = 0;

        $ctrl.$onInit = function() {
            if (!$ctrl.menuItems) {
                NavigationService.getMenuItems()
                    .then(function (items) {
                        $ctrl.menuItems = items
                    })
                    .catch(function (error) {
                    // TODO: Error handling
                    });
            }
            $ctrl.activeMenuIndex = NavigationService.getActiveMenuIndex();
        }

        $ctrl.highlightMenu = function(index) {
            $ctrl.activeMenuIndex = index;
            NavigationService.setActiveMenuIndex(index);
        }
    }

})();