(function () {
    angular
        .module('doghotelApp')
        .controller('ContactListController', ContactListController);

    ContactListController.$inject = ['$state', '$uibModal', 'ContactService'];
    function ContactListController($state, $uibModal, ContactService) {
        //Variables
        var vm = this;
        vm.Title = '';

        function getContactList() {
            ContactService.getContactList(function (data) {
                vm.contacts = data;
            }, function (err) {
                console.log(err);
            })
        }

        getContactList();
    }
})();
