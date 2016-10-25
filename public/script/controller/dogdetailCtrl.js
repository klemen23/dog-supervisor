(function () {
    angular
        .module('doghotelApp')
        .controller('DogDetailController', DogDetailController);

    DogDetailController.$inject = ['$stateParams', 'UserService', 'DogDetailService', '$filter'];

    function DogDetailController($stateParams, UserService, DogDetailService, $filter) {

        //Variables
        var vm = this;
        vm.Title = '';

        vm.currentData = {
            feeding: {},
            walks: {}
        };

        function getUserList() {
            UserService.getUserList(function (data) {
                vm.userList = data;
                vm.userChanged();
            }, function (err) {
                console.log(err);
            })
        }

        function getDogDetails(id) {
            DogDetailService.getDogDetails(id, function (data) {
                vm.currentData = data;
                vm.currentData.userId = data.userId[0];
            }, function (err) {
                console.log(err);
            })
        }

        function init() {
            getUserList();

            if ($stateParams.id) {
                getDogDetails($stateParams.id);
            }
        }

        vm.submitDogDetail = function () {
            vm.isSaved = false;
            if (vm.currentData._id) {
                DogDetailService.updateDogDetail(vm.currentData, function (data) {
                    vm.isSaved = true;
                }, function (err) {
                    console.log(err);
                })
            } else {
                DogDetailService.saveDogDetail(vm.currentData, function (data) {
                    vm.isSaved = true;
                }, function (err) {})
            }
        }

        vm.userChanged = function () {
            var temp = $filter('filter')(vm.userList, {
                '_id': vm.currentData.userId
            }, true);
            vm.username = temp[0].email;
        }

        init();
    }
})();