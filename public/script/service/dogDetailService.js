(function () {
    angular
        .module('doghotelApp')
        .service('DogDetailService', DogDetailService);

    DogDetailService.$inject = ['BASEPATH', 'AjaxHandlerFactory'];

    function DogDetailService(BASEPATH, AjaxHandlerFactory) {
        this.saveDogDetail = saveDogDetail;
        this.getDogDetails = getDogDetails;
        this.getDogDetailList = getDogDetailList;
        this.deleteDogDetail = deleteDogDetail;
        this.updateDogDetail = updateDogDetail;
        this.getDogDetailListByUser = getDogDetailListByUser;

        function saveDogDetail(data, successFunction, errorFunction) {
            AjaxHandlerFactory.AjaxPost(BASEPATH + 'dogDetail', data, function (response) {
                successFunction(response.data);
            }, function (error) {
                errorFunction(error);
            });
        };

        function getDogDetailList(successFunction, errorFunction) {
            AjaxHandlerFactory.AjaxGet(BASEPATH + 'dogDetail', {}, function (response) {
                successFunction(response.data);
            }, function (error) {
                errorFunction(error);
            });
        };

        function getDogDetails(data, successFunction, errorFunction) {
            AjaxHandlerFactory.AjaxGet(BASEPATH + 'dogDetail/' + data, {}, function (response) {
                successFunction(response.data);
            }, function (error) {
                errorFunction(error);
            });
        };


        function getDogDetailListByUser(data, successFunction, errorFunction) {
            AjaxHandlerFactory.AjaxGet(BASEPATH + 'dogDetail/user/' + data, {}, function (response) {
                successFunction(response.data);
            }, function (error) {
                errorFunction(error);
            });
        };

        function deleteDogDetail(data, successFunction, errorFunction) {
            AjaxHandlerFactory.AjaxDelete(BASEPATH + 'dogDetail/' + data, {}, function (response) {
                successFunction(response.data);
            }, function (error) {
                errorFunction(error);
            });
        };

        function updateDogDetail(data, successFunction, errorFunction) {
            AjaxHandlerFactory.AjaxPut(BASEPATH + 'dogDetail/' + data._id, data, function (response) {
                successFunction(response.data);
            }, function (error) {
                errorFunction(error);
            });
        };

    }
})();