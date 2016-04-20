'use strict';
beforeEach(function () {
    jasmine.addMatchers({
        toBePlaying: function () {
            return {
                compare: function (actual, expected) {
                    var player = actual;

                    return {
                        pass: player.currentlyPlayingSong === expected && player.isPlaying
                    };
                }
            };
        }
    });
});

var customMatchers = {
    toBeAReasonableExpense: function () {
        return {
            compare: function (actual) {
                var pass = actual.isReasonable();
                var judgement = pass ? 'unreasonable' : 'reasonable';
                return {
                    pass: pass,
                    message: 'Expected expense to be a' + judgement + 'expense.'
                };
            }

        };
    }
};