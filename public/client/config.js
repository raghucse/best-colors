(function () {
    angular
        .module("WebAppMaker")
        .config(configuration)
        .config(['$locationProvider', function($locationProvider) {
            $locationProvider.hashPrefix('');
        }]);

    function configuration($routeProvider) {
        $routeProvider
            .when("/list", {
                templateUrl: "views/productList/templates/list.view.client.html",
                controller: "ListController",
                controllerAs: "model"
            })
            .when("/colors", {
                templateUrl: "views/colors/templates/colors.view.client.html",
                controller: "ColorsController",
                controllerAs: "model"
            })
            .when("/op", {
                templateUrl: "views/orderPlaced/templates/op.view.client.html",
                controller: "OpController",
                controllerAs: "model"
            })
            .when("/checkout", {
                templateUrl: "views/checkout/templates/checkout.view.client.html",
                controller: "CheckoutController",
                controllerAs: "model"
            });
    }
})();