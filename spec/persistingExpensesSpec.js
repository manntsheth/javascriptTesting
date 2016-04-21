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


    describe('spy on', function () {
        it('should spy on persistExpenses', inject(function (expenseDataService) {
            expenseDataService.persistExpenses();
            expect(spy).toHaveBeenCalled();
        }));
        it('should spy on persistExpenses and fake a reply', inject(function (expenseDataService) {
            var spy = spyOn(expenseDataService, 'persistExpenses').and.callFake(function () {
                return 3;
            });
            var numRecordsPersisted = expenseDataService.persistExpenses();
            expect(numRecordsPersisted).toEqual(3);
        }));
    });
});