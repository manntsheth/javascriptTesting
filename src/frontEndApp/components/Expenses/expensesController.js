(function () {
    'use strict';
    angular.module('jstesting')
        .controller('expensesController', ['expenseDataService', expensesController]);

    function expensesController(expenseDataService) {
        var vm = this;
        vm.activate = activate;
        vm.expenseItems = [];
        activate();

        function activate() {
            vm.expenseItems = expenseDataService.getExpenses();
        }
    }
})();