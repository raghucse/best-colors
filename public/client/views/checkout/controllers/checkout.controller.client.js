(function () {
    angular
        .module("WebAppMaker")
        .controller("CheckoutController", CheckoutController);

    function CheckoutController($rootScope) {
        var vm = this;

        function init() {
            vm.items = $rootScope.cartItems;
        }
        init();
    }
})();
