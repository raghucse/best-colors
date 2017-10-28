(function () {
    angular
        .module("WebAppMaker")
        .config(configuration)
        .config(['$locationProvider', function($locationProvider) {
            $locationProvider.hashPrefix('');
        }]);

    function configuration($routeProvider) {
        $routeProvider
            .when("/colors", {
                templateUrl: "views/colors/templates/colors.view.client.html",
                controller: "ColorsController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/colors"
            });
    }
})();