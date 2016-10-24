(function () {
    angular
        .module('doghotelApp')
        .service('UserService', UserService);

    UserService.$inject = ['BASEPATH', 'AjaxHandlerFactory'];
    function UserService(BASEPATH, AjaxHandlerFactory) {
        this.getUserList = getUserList;
        this.login = login;
        this.register = register;
        this.logout = logout;

        function getUserList(successFunction, errorFunction) {
            AjaxHandlerFactory.AjaxGet(BASEPATH + 'users/list', {}, function (response) {
                successFunction(response.data);
            }, function (error) {
                errorFunction(error);
            });
        };

        function login(data, successFunction, errorFunction) {
            AjaxHandlerFactory.AjaxPost(BASEPATH + 'auth/signin', data, function (response) {
                successFunction(response.data);
            }, function (error) {
                errorFunction(error);
            });
        };

        function register(data, successFunction, errorFunction) {
            AjaxHandlerFactory.AjaxPost(BASEPATH + 'auth/signup', data, function (response) {
                successFunction(response.data);
            }, function (error) {
                errorFunction(error);
            });
        };

        function logout(successFunction, errorFunction) {
            AjaxHandlerFactory.AjaxGet(BASEPATH + 'auth/signout', {}, function (response) {
                successFunction(response.data);
            }, function (error) {
                errorFunction(error);
            });
        };
    }
})();