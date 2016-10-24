(function () {
    'use strict';
    angular
        .module('doghotelApp', ['ui.router', 'ui.bootstrap', 'ngSanitize', 'ngAnimate', 'ngAria', 'ngStorage', 'ajaxHandlerModule'])
        .constant("BASEPATH","/api/");
})();
