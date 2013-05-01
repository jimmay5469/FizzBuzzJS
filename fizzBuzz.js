var Fizz = function (number) { return number % 3 === 0; };
var Buzz = function (number) { return number % 5 === 0; };

var transformers = {
	"FizzBuzz": function (number) { return Fizz(number) && Buzz(number); },
	"Fizz": Fizz,
	"Buzz": Buzz
};

var transform = function (number) {
	for(var transformer in transformers) {
		if(transformers[transformer](number)) {
			return transformer;
		}
	}
	return number;
};

for(var i=1; i<100; i++) {
	console.log(transform(i));
}