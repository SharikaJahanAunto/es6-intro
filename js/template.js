const person = 'Adam Sandler';
const person2 = "Ben White";
const person3 = `Donald Trum`;

const multiLine = 'First Line text \n' + 
'second line of code \n' +
'Fourth line of string \n';
console.log(multiLine);

const newMultiline = `First line of text
second line of text
third line of string 
fourth line of code`
// console.log(newMultiline);

const a = 20;
const b = 30;
const nums = [78, 98, 45, 12, 6, 444]
const summary = 'sum of: ' + a + ' and ' + b +" is "+ (a+b);
// console.log(summary);

const newSummary = `sum of ${a} and ${b} is: ${a+b}`;
console.log(newSummary);