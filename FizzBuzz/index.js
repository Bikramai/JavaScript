// Divisibly by 3 => Fizz
// Divisibly by 5 => Buzz
// Divisibly by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not anumber'

const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;
    
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz'

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz'

    return input;


}