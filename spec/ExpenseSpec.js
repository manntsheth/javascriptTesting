describe("Expense objects", function () {
    var expenseItem, expense;
    beforeEach(function () {
        expenseItem = new ExpenseItem(100); //Step 2
        expense = new Expense(expenseItem);
    });
    it("should be of type ExpenseItem", function () {
        /*   var expenseItem = new ExpenseItem(0);
           var expense = new Expense(expenseItem);*/ //Step 1
        expect(expense.expenseItem).toBe(expenseItem);
    });

    it("should have correct expense amount", function () {
        /*    var expenseItem = new ExpenseItem(100);
            var expense = new Expense(expenseItem);*/ //Step 1
        expect(expense.expenseItem.amount).toEqual(100);
    });
});