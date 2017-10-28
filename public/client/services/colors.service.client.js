(function () {
    angular
        .module("WebAppMaker")
        .factory("ColorsService", eventService);

    function eventService($http) {

        var api = {
            "createEventForUser": createEventForUser,
        };

        return api;

        function createEventForUser(userColors) {
            return $http.post("/app/colors/"+userColors);
        }
    }

})();