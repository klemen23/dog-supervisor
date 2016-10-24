(function () {
    angular
        .module('doghotelApp')
        .controller('FeedingController', FeedingController);

    FeedingController.$inject = ['$state', '$uibModalInstance', 'DogDetailService', 'AuthenticationFactory'];
    function FeedingController($state, $uibModalInstance, DogDetailService, AuthenticationFactory) {
        //Variables
        var vm = this;
        vm.Title = '';
        var userData = AuthenticationFactory.getUser();
        function getFeeding() {
            DogDetailService.getDogDetailListByUser(userData._id, function (data) {
                vm.dogdetails = data;
            }, function (err) {
                console.log(err);
            })
        }

        vm.close = function () {
            $uibModalInstance.dismiss('cancel');
        }


        getFeeding();
    }
})();
