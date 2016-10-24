(function () {
    angular
        .module('doghotelApp')
        .factory('AuthenticationFactory', AuthenticationFactory);

    AuthenticationFactory.$inject = ['$http', '$rootScope', '$localStorage'];
    function AuthenticationFactory($http, $rootScope, $localStorage) {
        var service = {
            isLoggedIn: isLoggedIn,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser,
            clearCredentials: clearCredentials,
            getUser: getUser
        };

        return service;


        function getCurrentUser() {
            $rootScope.currentUser = $localStorage.UserData || {};
            $rootScope.userrole = $rootScope.currentUser.roles ? $rootScope.currentUser.roles[0] : '';
        }
        function isLoggedIn() {
            return ($localStorage.UserData) ? true : false;
        };
        function setCurrentUser(user) {
            $rootScope.currentUser = user;
            $localStorage.UserData = user;
            $rootScope.userrole = user.roles[0];
        };
        function clearCredentials() {
            $rootScope.currentUser = null;
            $rootScope.userrole = '';
            delete $http.defaults.headers.common['Authorization']; // jshint ignore:line
            delete $localStorage.UserData;
        };

        function getUser() {
            return $localStorage.UserData || {};
        }
    }
})();