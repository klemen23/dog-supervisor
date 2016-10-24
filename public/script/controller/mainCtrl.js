(function () {
    angular
        .module('doghotelApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$uibModal', '$state', '$rootScope', 'UserService', 'AuthenticationFactory'];
    function MainController($uibModal, $state, $rootScope, UserService, AuthenticationFactory) {

        //Variables
        var vm = this;
        vm.Title = '';
        vm.menuImage = 'img/showhidemenu.png';
        //Private  Function
        function init() {
            vm.Title = 'Main Page';
        }

        vm.openContact = function () {
            vm.modalInstance = $uibModal.open({
                templateUrl: 'view/contact.html',
                controller: 'ContactController',
                controllerAs: 'contact',
            });
            vm.modalInstance.result.then(function (data) {
                console.log(data);
            }, function () {
            });
        }

        vm.openWalk = function () {
            vm.modalInstance = $uibModal.open({
                templateUrl: 'view/walks.html',
                controller: 'WalkController',
                controllerAs: 'dogdetailList',
            });
            vm.modalInstance.result.then(function (data) {
                console.log(data);
            }, function () {
            });
        }

        vm.openFeeding = function () {
            vm.modalInstance = $uibModal.open({
                templateUrl: 'view/feeding.html',
                controller: 'FeedingController',
                controllerAs: 'dogdetailList',
            });
            vm.modalInstance.result.then(function (data) {
                console.log(data);
            }, function () {
            });
        }

        vm.openMenu = function () {
            vm.menuOpen = !vm.menuOpen;
            if (vm.menuOpen) {
                vm.menuImage = 'img/close.png';
            }
            else {
                vm.menuImage = 'img/showhidemenu.png';
            }
            $('#menu-button').toggleClass('menu-open');
            $("#cbp-spmenu-s1").toggleClass('cbp-spmenu-open');
        }

        function init() {
            AuthenticationFactory.getCurrentUser();

            $rootScope.isLoggedIn = AuthenticationFactory.isLoggedIn();
        }

        vm.logOut = function () {
            UserService.logout(function () {
                $rootScope.isLoggedIn = false;
                AuthenticationFactory.clearCredentials();
                vm.openMenu();
                $state.go('login');
            }, function (err) {
                console.log(err);
            })
        }


        //initial calls and configuration
        init();
    }
})();
