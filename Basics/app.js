console.log("Hello Jihirsh");
alert ("Hello Jihirsh");

// This is a comment : clg -> console.log (short form in VS Code)
let firstName = "Jihirsh";
console.log(firstName);

console.log(firstName.slice(0, 4));

//do-while loop
// let i = 20;
// do {
//     console.log(firstName, i);
//     i++;
// } while (i <= 400);


//arrays
let myList = ["Eat", "Sleep", "Code", "Repeat"];
console.log(myList[2]);

const person = {
    name: "Jihirsh",
    age: 22,
    location: "India",
    isStudent: true,
};

person.lastName = "Singh";
console.log(person);


//Function Declaration
function greet(name) {
    console.log(`Hello ${name} from our first function`);
}
//calling the function
greet("Jihirsh");
greet("Anna")


function add(a, b, c) {
    return a + b + c;
}
console.log(add(17, 34, 113));

//Function Expression
const square = function (x) {
    return x * x;
};
console.log(square(5)); //don't put this line before initializing the function expression


//When we provide function as an argument to another function, that function is called a callback function
function greetings(nameNew, callback) {
    console.log("Hello, " + nameNew);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

// Passing `sayGoodbye` as a callback to `greet`
greetings("Alice", sayGoodbye);
// Output:
// Hello, Alice
// Goodbye!


//Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.
//The two types of scope are local and global:
//Local variables are declared within a function and can only be accessed within that function.
//Global variables are declared outside of a function and can be accessed throughout the program.

const currentDate = new Date();
console.log(currentDate);
const month = currentDate.getMonth();
console.log(`Month: ${month}`);

// setInterval will run our code again and again after a certain interval of time
// setTimeOut will run our code only once after a certain interval of time

// setTimeout (function() {
//     console.log(`This function will be executed after 3 seconds`);
// } , 3000);

//Stop the interval after 10 seconds 
const intervalId = setInterval(function () {
    console.log(`This function is being executed at an interval`);
}, 1000);

setTimeout(function () {
    clearInterval(intervalId);
    console.log(`Interval has been stopped`);
}, 10000);