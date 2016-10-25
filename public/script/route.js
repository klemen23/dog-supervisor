(function () {
    angular
        .module('doghotelApp')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'view/home.html',
                controller: "HomeController",
                controllerAs: 'home',
            })
            .state('login', {
                url: '/login',
                templateUrl: 'view/login.html',
                controller: "LoginController",
                controllerAs: 'login',
            })

        .state('admin', {
                url: '/admin',
                templateUrl: 'view/admin.html',
                abstract: true,
                controller: "AdminController",
                controllerAs: 'admin',
            })
            .state('admin.userlist', {
                url: '/userlist',
                templateUrl: 'view/userlist.html',
                controller: "UserListController",
                controllerAs: 'userlist'
            })
            .state('admin.contactlist', {
                url: '/contactlist',
                templateUrl: 'view/contactlist.html',
                controller: "ContactListController",
                controllerAs: 'contactlist'
            })
            .state('admin.dogdetail', {
                url: '/dogdetail',
                templateUrl: 'view/dogdetail.html',
                controller: "DogDetailController",
                controllerAs: 'dogdetail'
            })
            .state('admin.dogdetailbyid', {
                url: '/dogdetail/:id',
                templateUrl: 'view/dogdetail.html',
                controller: "DogDetailController",
                controllerAs: 'dogdetail'
            })
            .state('admin.dogdetaillist', {
                url: '/dogdetaillist',
                templateUrl: 'view/dogdetaillist.html',
                controller: "DogDetailListController",
                controllerAs: 'dogdetailList'
            });


        $urlRouterProvider.otherwise('/login');
    }
})();