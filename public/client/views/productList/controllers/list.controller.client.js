(function () {
    angular
        .module("WebAppMaker")
        .controller("ListController", ListController);

    function ListController($rootScope, $location) {
        var vm = this;
        vm.addItem = addItem;
        vm.checkOut = checkOut;

        function init() {
            vm.items = $rootScope.items;
            $rootScope.cartItems = [];

        }
        init();

        function addItem(item) {
            item.added = true;
            $rootScope.cartItems.push(item);
            console.log($rootScope.cartItems);
        }

        function checkOut(item) {
            $location.url("/checkout")
        }

    }
})();
