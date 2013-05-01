var fizz = {
	isMatch: function (number) { return number % 3 == 0; },
	transform: function (number) { return "Fizz"; }
};
var buzz = {
	isMatch: function (number) { return number % 5 == 0; },
	transform: function (number) { return "Buzz"; }
};
var fizzBuzz = {
	isMatch: function (number) { return fizz.isMatch(number) && buzz.isMatch(number); },
	transform: function (number) { return "FizzBuzz"; }
};
var fallback = {
	isMatch: function (number) { return true; },
	transform: function (number) { return number; }
};

var transformers = {
	"fizzBuzz": fizzBuzz,
	"fizz": fizz,
	"buzz": buzz,
	"fallback": fallback
};

var transform = function (number) {
	for(var key in transformers) {
		if(transformers[key].isMatch(number)) {
			return transformers[key].transform(number);
		}
	}
};

for(var i=1; i<100; i++) {
	console.log(transform(i));
}