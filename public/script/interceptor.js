
(function () {
    angular
        .module('doghotelApp').run(run);

    function run($rootScope, $state, $http, AuthenticationFactory) {
        $rootScope.$state = $state;
        $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
            if (toState.data && toState.data.requiredlogin && AuthenticationFactory.isLoggedIn()) {
                e.preventDefault();
                $state.transitionTo("login");
            }
        });
    }
})();