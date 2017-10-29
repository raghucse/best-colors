(function () {
    angular
        .module("WebAppMaker")
        .controller("CheckoutController", CheckoutController);

    function CheckoutController($rootScope, $location) {
        var vm = this;
        vm.placeOrder = placeOrder;

        function init() {
            var sale = 0;
            var shipping = 0;
            vm.items = $rootScope.cartItems;
            for (i = 0; i < $rootScope.cartItems.length; i++) {
                sale += $rootScope.cartItems[i].salePrice;
                shipping += $rootScope.cartItems[i].standardShipRate;
            }
            console.log(sale+" "+shipping+" "+vm.totalPrice);
            vm.totalPrice = sale + shipping;
        }
        init();

        function placeOrder() {
            $location.url("/op");
        }
    }
})();
