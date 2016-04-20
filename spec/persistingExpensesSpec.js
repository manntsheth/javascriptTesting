'use strict';

describe('persisting expenses', function () {
    beforeEach(module('jstesting'));
    describe('call backs', function () {
        it('should call back when persisted', inject(function (expenseDataService) {
            var spyCallBack = jasmine.createSpy('callBackSpy');
            expenseDataService.persistExpenses(spyCallBack);
            expect(spyCallBack).toHaveBeenCalled();
        }));
    });
});