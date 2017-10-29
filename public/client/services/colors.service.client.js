(function () {
    angular
        .module("WebAppMaker")
        .factory("colorService", colorService);

    function colorService($http) {

        var api = {
            "searchItem": searchItem,
        };

        return api;

        function searchItem(query) {
            console.log(query);
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