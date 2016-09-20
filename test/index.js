const chai = require('chai');
const assert = chai.assert;
import  scoreWord from '../lib/score-word.js';

describe('scoreWord', function() {
    it('should be a function', function() {
        assert.isFunction(scoreWord);
    });

    context('test word scores', function() {
        it('should take the word hello and return 8', function() {
            let score = scoreWord('hello');
            assert.equal(score, 8);
        });
        
        it('should take the word happy and return 15', function() {
            let score = scoreWord('happy');
            assert.equal(score, 15);
        });

        it('should take the word goodbye and return 14', function() {
            let score = scoreWord('goodbye');
            assert.equal(score, 14);
            
        });
    });

    context('edge cases', function() {
        it('should not be case sensitive.  HELLO should return 8', function() {
            let score = scoreWord('HELLO')
            assert.equal(score, 8);
        });

        it('should not be case sensitive. hELlo should return 8', function() {
            let score = scoreWord('hELlo');
            assert.equal(score, 8);
        });

        it('should strip any whitespace before or after the word', function() {
            let score = scoreWord(' hello    ');
            assert.equal(score, 8);
        });

        it('should return 0 if the input is an empty string', function() {
            let score = scoreWord('');
            assert.equal(score, 0);
        });

        it('should return 0 if the input is null', function() {
            let score = scoreWord(null);
            assert.equal(score, 0);
        });

        it('should return 0 if the input is a number', function() {
            let score = scoreWord(42);
            assert.equal(score, 0);
        });

        it('should return 0 if no arguments are passed', function() {
            let score = scoreWord();
            assert.equal(score, 0);
        });
    });

    context('2nd argument as a word multiplier', function() {
        it('hello as a double word should return 16', function() {
            let score = scoreWord('hello', 2);
            assert.equal(score, 16);
        });
        it('hello as a triple word should return 24', function() {
            let score = scoreWord('hello', 3);
            assert.equal(score, 24);
        });
        
        it('happy as a double word score should return 30', function() {
            let score = scoreWord('happy', 2);
            assert.equal(score, 30);
        });

        it('goodbye as a triple word score should return 42', function() {
            let score = scoreWord('goodbye', 3);
            assert.equal(score, 42);
            
        });
    });
});