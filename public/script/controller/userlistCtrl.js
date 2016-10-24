(function () {
    angular
        .module('doghotelApp')
        .controller('UserListController', UserListController);

    UserListController.$inject = ['$state', '$uibModal', 'UserService'];
    function UserListController($state, $uibModal, UserService) {
        //Variables
        var vm = this;
        vm.Title = '';

        function getUserList() {
            UserService.getUserList(function (data) {
                vm.users = data;
            }, function (err) {
                console.log(err);
            })
        }

        getUserList();
    }
})();
