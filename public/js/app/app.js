(function() {

    angular.module('mukta-trust', ['ui.router'])
        .run(['$transitions', function ($transitions) {
            $transitions.onStart({}, function (trans) {
                var $state = trans.router.stateService;
                // Code to disable error:
                // TransitionRejection(type: 2, message: The transition has been superseded by a different transition, detail: Transition#1( ''{} -> 'home'{} ))
                $state.defaultErrorHandler(function() { console.info('Transition cancelled as its superseded by another programatic transition')});
                var NavigationService = trans.injector().get('NavigationService');
                var activeMenuItem = NavigationService.getActiveMenuIndex();
                if (activeMenuItem === 0 && trans.to().name !== 'home') {
                    console.log('from: ', trans.$from().name);
                    console.log('to: ', trans.$to().name);
                    console.log('Active Menu: ', activeMenuItem);
                    $state.go('home');
                }
            })
        }]);

})();