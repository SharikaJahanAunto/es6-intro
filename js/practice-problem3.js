// Write an arrow function where it will do the following:
// a) square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
const square = [];

const doSquare = (array) =>{
    for (let i = 0; i< array.length; i++){
        const element = Math.sqrt(array[i]).toFixed(2);
        square.push(element)
    }
    return square;
}
const numbers = [3, 5, 6, 7];
const output = doSquare(numbers);
console.log(output);

const sum = square.reduce((acc, val) => acc+val, 0);
console.log(sum);


