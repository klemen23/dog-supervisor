(function () {
    angular
        .module('doghotelApp')
        .controller('DogDetailListController', DogDetailListController);

    DogDetailListController.$inject = ['$state', '$uibModal', 'DogDetailService'];
    function DogDetailListController($state, $uibModal, DogDetailService) {
        //Variables
        var vm = this;
        vm.Title = '';

        function getDogDetailList() {
            DogDetailService.getDogDetailList(function (data) {
                vm.dogdetails = data;
            }, function (err) {
                console.log(err);
            })
        }

       
        getDogDetailList();
    }
})();
