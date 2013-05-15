var assert = require("assert");
var fizzBuzz = require("./../fizzBuzz");

describe('fizzBuzz', function() {
	describe('transform', function() {
		it('should return 1 for 1', function() {
			var result = fizzBuzz.transform(1);
			assert.equal(result, 1);
		});
		it('should return "Fizz" for 3', function() {
			var result = fizzBuzz.transform(3);
			assert.equal(result, "Fizz");
		});
		it('should return "Buzz" for 5', function() {
			var result = fizzBuzz.transform(5);
			assert.equal(result, "Buzz");
		});
		it('should return "FizzBuzz" for 15', function() {
			var result = fizzBuzz.transform(15);
			assert.equal(result, "FizzBuzz");
		});
	});
});
