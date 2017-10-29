(function () {
    angular
        .module("WebAppMaker")
        .factory("ColorsService", eventService);

    function eventService($http) {

        var api = {
            "searchItem": searchItem,
        };

        return api;

        function searchItem(query) {
            var urlBase = "https://api.walmartlabs.com/v1/search?apiKey=cpdgmcduc6zz85n7zau6f5zz&query=API_QUERY";
            var url = urlBase.replace("API_QUERY", query);
            return $.ajax({
                url: url,
                dataType: 'jsonp',
                type: "GET",
                error: function (e) {
                    console.dir(e);
                }
            }).then(function (resp) {
                return resp;
            });
        }
    }

})();