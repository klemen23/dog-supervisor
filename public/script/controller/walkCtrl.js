(function () {
    angular
        .module('doghotelApp')
        .controller('WalkController', WalkController);

    WalkController.$inject = ['$state', '$uibModalInstance', 'AuthenticationFactory', 'DogDetailService'];
    function WalkController($state, $uibModalInstance, AuthenticationFactory ,DogDetailService) {
        //Variables
        var vm = this;
        vm.Title = '';

        var userData = AuthenticationFactory.getUser();
        function getDogDetailList() {
            DogDetailService.getDogDetailListByUser(userData._id, function (data) {
                vm.dogdetails = data;
            }, function (err) {
                console.log(err);
            })
        }

        vm.close = function () {
            $uibModalInstance.dismiss('cancel');
        }

        getDogDetailList();
    }
})();
