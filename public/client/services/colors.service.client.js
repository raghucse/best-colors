(function () {
    angular
        .module("WebAppMaker")
        .factory("ColorsService", eventService);

    function eventService($http) {

        var api = {
            "createEventForUser": createEventForUser,
        };

        return api;

        function createEventForUser(hostId, event) {
            return $http.post("/api/user/" + hostId + "/event", event);
        }
    }

})();