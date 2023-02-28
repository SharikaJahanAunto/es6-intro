// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the name of your friends
// b) Check if the length of  each element is even, push elements with even length to a new array and return the result.

const array = ['baby', 'sakib', 'tonny']
console.log(...array);

const getElementWithArrayLength = (array) => {
    const newArray = []
    for( let i= 0; i<array.length; i++){
        const element = array[i];
        if(element.length % 2 === 0){
            newArray.push(element)
        }
    }
    return newArray;
}

const output = getElementWithArrayLength(array)
console.log(output);