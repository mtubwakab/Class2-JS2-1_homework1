

const numbers = [1, 2, 3, 4]
const newNumbers = numbers.filter((number) => (number % 2 !== 0));

const result = newNumbers.map((number1) => number1 * 2);

console.log("The doubled numbers are", result)

