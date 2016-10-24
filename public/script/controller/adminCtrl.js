(function () {
    angular
        .module('doghotelApp')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['$state', '$uibModal', 'AuthenticationFactory', 'UserService'];
    function AdminController($state, $uibModal, AuthenticationFactory,UserService) {
        //Variables
        var vm = this;
        vm.Title = '';



        vm.logOut = function () {
            UserService.logout(function () {
                AuthenticationFactory.clearCredentials();
                $state.go('login');
            }, function (err) {
                console.log(err);
            })
        }
    }
})();
