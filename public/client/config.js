(function () {
    angular
        .module("WebAppMaker")
        .config(configuration)
        .config(['$locationProvider', function($locationProvider) {
            $locationProvider.hashPrefix('');
        }]);

    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/home/templates/home.view.client.html",
                controller: "HomeController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/"
            });
    }

    var checkUserLoggedin = function($q, $timeout, $http, $location, $rootScope) {
        var deferred = $q.defer();
        $http.get('/api/loggedin').then(function(user) {
            $rootScope.errorMessage = null;
            user = user.data;
            if (user !== '0') {
                deferred.resolve();
            } else {
                deferred.reject();
                $location.url('/home');
            }
        });
        return deferred.promise;
    };

    var checkVendorLoggedin = function($q, $timeout, $http, $location, $rootScope) {
        var deferred = $q.defer();
        $http.get('/api/vendor/loggedin').then(function(vendor) {
            $rootScope.errorMessage = null;
            vendor = vendor.data;
            if (vendor !== '0') {
                deferred.resolve();
            } else {
                deferred.reject();
                $location.url('/home');
            }
        });
        return deferred.promise;
    };


})();