(function () {
    angular
        .module('doghotelApp')
        .factory('httpInterceptor', httpInterceptor);

    httpInterceptor.$inject = ['$q'];
    function httpInterceptor($q) {
        var httpInterceptor = {
            request: request,
            requestError: requestError,
            response: response,
            responseError: responseError
        }

        return httpInterceptor;

        function request(config) {
            return config || $q.when(config);
        };

        function requestError(rejection) {
            console.log(rejection);
            return $q.reject(rejection);
        };

        function response(response) {
            return response || $q.when(response);;
        };

        function responseError(rejection) {
            if (rejection.status == 401) {
                window.href = '/login.html';
                return $q.reject(rejection);
            }
            console.log(rejection);
            return $q.reject(rejection);
        };
    }

    angular.module('doghotelApp').config(config);
    config.$inject = ['$httpProvider'];
    function config($httpProvider) {
        $httpProvider.interceptors.push(httpInterceptor);
    }
})();
