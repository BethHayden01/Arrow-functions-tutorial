/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

//Vanilla JS uses the function keywork to define functions as shown below.

//function addTwoNumbers(a,b) {
    //code block
 //   return a + b;
//}

//let sum = addTwoNumbers(3,5);
//console.log(sum);

// Arrow Function With Parameters
// Uses const instead of function
const addTwoNumbers = (a,b) => {
    //code block
   return a + b;
}

let sum = addTwoNumbers(3,5);
console.log(sum);

// Single Line Arrow Function With Parameters
//Can only be used for simple functions, more complex functions will need to use curly brackets as above. 
//const addTwoNumbers2 = (a,b) => (a+b); Also valid with second brackets
const addTwoNumbers2 = (a,b) => a+b;
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);

// Implicit Returns
// For even simpler functions such as those that those that only take one single parameter, you can leave off the first set of brackets too. 
//For example a function that just logs a message to the console:
const saySomething = message => console.log(message);
saySomething("Hello There!!");

//If you have a function that takes no parameters at all, you must use empty brackets to tell JS you're declaring a function.
const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines
// If a arrow function needs to return multiple lines such as the one below that returns a multi line string, brackets are required.
const returnMultipleLines = () => (
    `<p>
    This is a multi Line string!!
    </p>`
)

console.log(returnMultipleLines());

//If you need to return multiple lines of code, you must write whatever comes after the return keywork in brackets 
//hence why there is an extra set of brackets after returnMultipleLines above.

//Same for an explicit return statement inside a set of curly brackets as well

