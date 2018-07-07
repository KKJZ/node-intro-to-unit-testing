// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzbuzzer
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it('Should take a number and see it is fizz buzz or fizz-buzz', function() {
		//make good cases
		const correctCase = [{
			input: 3, output: "fizz"}, {
			input: 5, output: "buzz"}, {
			input: 15, output: "fizz-buzz"}, {
			input: 30, output: "fizz-buzz"}];
		correctCase.forEach(function(input){
			expect(fizzBuzzer(input.input)).to.equal(input.output)
		});
	});

	it('Should raise an error if the input is not a number', function() {
		//make some wrong inputs
		const wrongInputs = ['string', false, undefined];
		wrongInputs.forEach(function(input){
			expect(function(){fizzBuzzer(input);
			}).to.throw(Error);
		});
	});
});