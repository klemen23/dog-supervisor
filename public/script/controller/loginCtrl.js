(function () {
    angular
        .module('doghotelApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', '$uibModal', '$rootScope', 'AuthenticationFactory', 'UserService'];
    function LoginController($state, $uibModal,   $rootScope, AuthenticationFactory,UserService) {

        //Variables
        var vm = this;
        vm.Title = '';
        vm.userData = {};
        $rootScope.isLoggedIn = false;
        vm.openRegister = function () {
            vm.modalInstance = $uibModal.open({
                templateUrl: 'view/register.html',
                controller: 'RegisterController',
                controllerAs: 'register',
                size: 'lg'
            });
            vm.modalInstance.result.then(function (data) {
                afterLogin(data);
            }, function () {
            });
        }

        function afterLogin(data) {
            AuthenticationFactory.setCurrentUser(data);
            $rootScope.isLoggedIn = true;
            setTimeout(function () {
                if (data.roles[0] == 'admin') {
                    $state.go('admin.userlist');
                }
                else {
                    $state.go('home');
                }
            }, 0)
        }

        vm.loginUser = function () {
            UserService.login(vm.userData, function (data) {
                afterLogin(data);
            }, function (err) {
                if (err.status == 400) {
                    vm.showInvalid = true;
                }
            });
        }

       // AuthenticationFactory.clearCredentials();
    }
})();
