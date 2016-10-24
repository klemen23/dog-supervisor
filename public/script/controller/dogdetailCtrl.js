(function () {
    angular
        .module('doghotelApp')
        .controller('DogDetailController', DogDetailController);

    DogDetailController.$inject = ['UserService', 'DogDetailService', '$filter'];
    function DogDetailController(UserService, DogDetailService, $filter) {

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
            }, function (err) {
                console.log(err);
            })
        }

        function init() {
            getUserList();
        }

        vm.submitDogDetail = function () {
            DogDetailService.saveDogDetail(vm.currentData, function (data) {
                vm.isSaved = true;
            }, function (err) {
            })
        }

        vm.userChanged = function () {
            var temp = $filter('filter')(vm.userList, { '_id': vm.currentData.userId }, true);
            vm.username = temp[0].email;
        }

        init();
    }
})();
