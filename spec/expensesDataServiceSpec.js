'use strict';
describe('expenseDataService', function () {
    beforeEach(module('jstesting'));

    it('should return three expense items', inject(function (expenseDataService) {
        expect(expenseDataService.getExpenses().length).toBe(3);
    }));

    it('should return a taxi expense', inject(function (expenseDataService) {
        var expenseItems = expenseDataService.getExpenses();
        var testExpenseItem = new ExpenseItem('Taxi', 'To airport', 89.95);
        expect(expenseItems).toContain(testExpenseItem);
    }));

    describe('reasonable expense', function () {
        var taxi, dinner;
        beforeEach(function () {
            jasmine.addMatchers(customMatchers);
        });
        beforeEach(function () {
            taxi = new ExpenseItem('Taxi', 'To airport', 89.95);
            dinner = new ExpenseItem('dinner', 'Dinner with John and Ward', 189.50);
        });

        it('taxi should be a reasonable expense', function () {
            //expect(taxi).toBeLessThan(100); for that
            expect(taxi).toBeAReasonableExpense();
        });
        it('dinner should not be a reasonable expense', function () {
            expect(dinner).not.toBeAReasonableExpense();
        });
    });

});