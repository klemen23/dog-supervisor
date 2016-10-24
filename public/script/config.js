
(function () {
    angular.module('doghotelApp').config(config);

    config.$inject = ['$httpProvider'];

    function config($httpProvider) {

        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript, text/html';
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
    }
})();