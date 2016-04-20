(function () {
    'use strict';
    angular.module('jstesting')
        .factory('expenseDataService', ['$http', expenseDataService]);

    function expenseDataService($http) {
        var service = {
            getExpenses: getExpenses,
            persistExpenses: persistExpenses
        };

        return service;

        function getExpenses() {
            return [
   new ExpenseItem('Taxi', 'To airport', 89.95),
                new ExpenseItem('Lunch', 'At airport', 15.40),
                new ExpenseItem('Coffee', 'Starbucks', 4.93)

                                /*{
                    title: 'Taxi',
                    description: 'To airport',
                    amount: 89.95
                }, {
                    title: 'Lunch',
                    description: 'At airport',
                    amount: 15.40
                }, {
                    title: 'Coffee',
                    description: 'Starbucks',
                    amount: 4.93
                }*/
                ];
        } //getExpenses ends

        function reportExpenses() {

        }

        function persistExpenses(reportExpenses) {
            var success = true;
            if (success) {
                reportExpenses();
            }
        }
    }
})();