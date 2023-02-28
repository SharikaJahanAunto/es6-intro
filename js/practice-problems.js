// Practice Problem-1: Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.

// const multiply = (num1, num2, num3) => {
//     const result =  num1 * num2 * num3;
//     return result;
// }
// result = multiply(3, 4, 5)
// console.log(result);


// Practice Problem-2: Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biriyani.

const sentence = `I am a web developer.
I love to code.
I love to eat biriyani.`
console.log(sentence);

// Practice Problem-3: Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will a default parameter. Add these two parameter and return the result.

const add = (a, b=4) => a + b;
const result = add(5);
console.log(result);