(function () {
    angular.module('mukta-trust')
        .component('aboutUs', {
            templateUrl: 'js/components/templates/about-us.component.html',
            // bindings: {
            //     activeMenu: '@'
            // },
            controller: AboutUsComponentController
        });

    AboutUsComponentController.$inject = ['$element', 'NavigationService'];

    function AboutUsComponentController($element, NavigationService) {
        var $ctrl = this;
    }

})();