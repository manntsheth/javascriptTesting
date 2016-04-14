describe('expenseDataService', function () {
    beforeEach(module('jstesting'));
    it('should return three expense items', inject(function (expenseDataService) {
        expect(expenseDataService.getExpenses().length).toBe(3);
    }));
});