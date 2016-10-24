(function () {
    angular
        .module('doghotelApp')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$uibModalInstance', 'ContactService'];
    function ContactController($uibModalInstance, ContactService) {

        //Variables
        var vm = this;
        vm.Title = '';
        vm.contactData = {};

        vm.close = function () {
            $uibModalInstance.dismiss('cancel');
        }

        vm.submitContact = function (item) {
            ContactService.saveContactList(vm.contactData, function (data) {
                $uibModalInstance.close(item);
            }, function (err) {
            })
        }
    }
})();
