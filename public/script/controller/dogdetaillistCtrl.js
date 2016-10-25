(function () {
    angular
        .module('doghotelApp')
        .controller('DogDetailListController', DogDetailListController);

    DogDetailListController.$inject = ['$state', '$uibModal', '$filter', 'DogDetailService'];

    function DogDetailListController($state, $uibModal, $filter, DogDetailService) {
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

        vm.deleteDetail = function (item) {
            DogDetailService.deleteDogDetail(item._id, function (data) {
                var index = vm.dogdetails.indexOf(item);
                vm.dogdetails.splice(index, 1);
                alert('Deleted');
            }, function (err) {
                console.log(err);
            })
        };

        vm.editDetail = function (item) {
            $state.go('admin.dogdetailbyid', {
                'id': item._id
            });
        };

        getDogDetailList();
    }
})();