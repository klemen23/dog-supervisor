(function () {
    angular
        .module('doghotelApp')
        .service('DogDetailService', DogDetailService);

    DogDetailService.$inject = ['BASEPATH', 'AjaxHandlerFactory'];
    function DogDetailService(BASEPATH, AjaxHandlerFactory) {
        this.saveDogDetail = saveDogDetail;
        this.getDogDetailList = getDogDetailList;
        this.getDogDetailListByUser = getDogDetailListByUser;

        function saveDogDetail(data, successFunction, errorFunction) {
            AjaxHandlerFactory.AjaxPost(BASEPATH + 'dogDetail', data, function (response) {
                successFunction(response.data);
            }, function (error) {
                errorFunction(error);
            });
        };

        function getDogDetailList( successFunction, errorFunction) {
            AjaxHandlerFactory.AjaxGet(BASEPATH + 'dogDetail' , {}, function (response) {
                successFunction(response.data);
            }, function (error) {
                errorFunction(error);
            });
        };

        function getDogDetailListByUser(data,successFunction, errorFunction) {
            AjaxHandlerFactory.AjaxGet(BASEPATH + 'dogDetail/user/' + data, {}, function (response) {
                successFunction(response.data);
            }, function (error) {
                errorFunction(error);
            });
        };
       
    }
})();