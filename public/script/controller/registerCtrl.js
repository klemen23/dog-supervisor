(function () {
    angular
        .module('doghotelApp')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$uibModalInstance', 'UserService'];
    function RegisterController($uibModalInstance, UserService) {

        //Variables
        var vm = this;
        vm.Title = '';
        vm.userData = {};

        vm.close = function () {
            $uibModalInstance.dismiss('cancel');
        }

        vm.registerUser = function (item) {
            UserService.register(vm.userData, function (data) {
                $uibModalInstance.close(data);
            }, function (err) {
                if (err.status == 400) {
                    vm.showInvalid = true;
                }
            });
        }
    }
})();
