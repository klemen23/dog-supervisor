(function () {
    angular
        .module('doghotelApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$state', '$uibModal'];
    function HomeController($state, $uibModal) {

        //Variables
        var vm = this;
        vm.Title = '';


        
    }
})();
