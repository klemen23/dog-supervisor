(function () {
    'use strict';
    angular.module('ajaxHandlerModule', ['cfp.loadingBar']);
    angular.module('ajaxHandlerModule').factory('AjaxHandlerFactory', AjaxHandlerFactory);

    AjaxHandlerFactory.$inject = ['$q', '$http', 'cfpLoadingBar'];

    function AjaxHandlerFactory($q, $http, cfpLoadingBar) {
        return {
            AjaxPost: AjaxPost,
            AjaxGet: AjaxGet,
            AjaxPut: AjaxPut,
            AjaxDelete: AjaxDelete
        }

        function AjaxPost(url, data, successFunction, errorFunction, hideLoader) {
            if (!hideLoader) {
                cfpLoadingBar.start();
            }
            $http.post(url, data, { 'Header': { 'Content-Type': 'application/json' } })
                .then(function (data) {
                    if ( $http.pendingRequests.length == 0) {
                        cfpLoadingBar.complete();
                    }
                    successFunction(data);
                }, function (error) {
                    if ($http.pendingRequests.length == 0) {
                        cfpLoadingBar.complete();
                    }
                    errorFunction(error);
                });
        }

        function AjaxGet(url, data, successFunction, errorFunction, hideLoader) {
            if (hideLoader) {
                cfpLoadingBar.start();
            }
            $http.get(url, data, { 'Header': { 'Content-Type': 'application/json' } })
                .then(function (data) {
                    if ($http.pendingRequests.length == 0) {
                        cfpLoadingBar.complete();
                    }
                    successFunction(data);
                }, function (error) {
                    if ($http.pendingRequests.length == 0) {
                        cfpLoadingBar.complete();
                    }
                    errorFunction(error);
                });
        }

        function AjaxPut(url, data, successFunction, errorFunction, hideLoader) {
            if (hideLoader) {
                cfpLoadingBar.start();
            }
            $http.put(url, data, { 'Header': { 'Content-Type': 'application/json' } })
                .then(function (data) {
                    if ($http.pendingRequests.length == 0) {
                        cfpLoadingBar.complete();
                    }
                    successFunction(data);
                }, function (error) {
                    if ($http.pendingRequests.length == 0) {
                        cfpLoadingBar.complete();
                    }
                    errorFunction(error);
                });
        }

        function AjaxDelete(url, data, successFunction, errorFunction, hideLoader) {
            if (hideLoader) {
                cfpLoadingBar.start();
            }
            $http.delete(url, data, { 'Header': { 'Content-Type': 'application/json' } })
                .then(function (data) {
                    if ($http.pendingRequests.length == 0) {
                        cfpLoadingBar.complete();
                    }
                    successFunction(data);
                }, function (error) {
                    if ($http.pendingRequests.length == 0) {
                        cfpLoadingBar.complete();
                    }
                    errorFunction(error);
                });
        }
    }

})();
