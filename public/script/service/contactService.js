(function () {
    angular
        .module('doghotelApp')
        .service('ContactService', ContactService);

    ContactService.$inject = ['BASEPATH', 'AjaxHandlerFactory'];
    function ContactService(BASEPATH, AjaxHandlerFactory) {
        this.getContactList = getContactList;
        this.saveContactList = saveContactList;

        function getContactList(successFunction, errorFunction) {
            AjaxHandlerFactory.AjaxGet(BASEPATH + 'contact', {}, function (response) {
                successFunction(response.data);
            }, function (error) {
                errorFunction(error);
            });
        };

        function saveContactList(data, successFunction, errorFunction) {
            AjaxHandlerFactory.AjaxPost(BASEPATH + 'contact', data, function (response) {
                successFunction(response.data);
            }, function (error) {
                errorFunction(error);
            });
        };
    }
})();