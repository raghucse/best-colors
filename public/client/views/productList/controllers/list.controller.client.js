(function () {
    angular
        .module("WebAppMaker")
        .controller("ListController", ListController);

    function ListController($rootScope) {
        var vm = this;

        function init() {
            vm.items = $rootScope.items;
        }
        init();
    }
})();
