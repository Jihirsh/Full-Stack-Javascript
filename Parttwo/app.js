//Template Strings, also known as Template Literals, are a feature in Javascript that allows you to create with strings with embedded expressions.
//Template Strings use back-ticks (``) to define the string instead of single or double quotes.
//Template Strings can contain placeholders, indicated by the dollar sign and curly braces (${expression}).
console.log(
  "this is some\
   random multiline text"
);

console.log(`This is better way
to write multiline text`);

const firstName = "Jihirsh";
const lastName = "Singh";

function info() {
  return "I am a software developer";
}
console.log(`${info()}`);

//Arrow Functions, also known as fat arrow functions, are a more concise way to write functions in JavaScript.
//They were introduced in ECMA Script 6 (ES6) and provide a more concise syntax for writing function expressions.

//function greet() {
//  return `Hello, ${username}`};
//};
greet = (username) => {
  return `Hello, ${username}`;
};
console.log(greet("Jihirsh"));

setTimeout(() => {
  console.log("Hello");
  setTimeout(() => {
    console.log("Hey");
    setTimeout(() => {
      console.log("Namaste");
      setTimeout(() => {
        console.log("Hola");
        setTimeout(() => {
          console.log("Bonjour");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);

function ratings(rate) {
  if (rate === 5) {
    console.log(`High Ratings :)`);
  } else if (rate === 0) {
    console.log(`Low Ratings :(`);
  }
}
ratings(0);

function multiply(a, b = 1, c = 10) {
  return a * b * c;
}
console.log(multiply(2, 2)); //output - 40

function giveMe4(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

// colors = ["red", "green", "blue", "yellow"];
// giveMe4(...colors); //output - a red, b green, c blue, d yellow

let people = ["huxn", "alex", "jordan"];
const allPeps = ["kumar", ...people, "james", "john"];
console.log(allPeps); //output - kumar huxn alex jordan james john

//make functions with a lot of parameters
function user(x, ...userData) {
  //x cannot be written after userData or will throw error
  console.log(x);
  console.log(userData);
}
user("Jihirsh", 21, "India", "Delhi", "Software Developer", "Football");

function person(firstName, lastName, ...hobbies) {
  console.log("First Name: ", firstName);
  console.log("Second Name: ", lastName);
  console.log("Hobbies: ", hobbies);
}

person("Jihirsh", "Singh", "Football", "Physics", "Coding", "Reading", "Flute");

//Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
//It is a convenient way to extract values from arrays or properties from objects into distinct variables.
function f() {
  return [1, 2, 3, 4, 5];
}
const [a, , b, , c] = f(); //output - a=1, b=3, c=5
console.log(a, b, c); //output - 1 3 5

//In Object Destructuring, you can extract properties from objects and assign them to variables.
//Order doesn't matter but Name does.

//Object destructuring and rest operator
let { x, y, ...rest } = { x: 100, y: 200, c: 300, d: 400, e: 500 };
console.log(x);
console.log(y);
console.log(rest);

//Ternary Operator is a shorthand way of writing an if-else statement (NOT if-else if, remember) in JavaScript.
//condition ? expressionIfTrue : expressionIfFalse;
let password = 8;
function passwordChecker(ps) {
  return ps === 8 ? `Strong Password` : `Weak Password`;
}
const res = passwordChecker(password);
console.log(res);

let list = ["one", "two", "three", "four", "five"];
for (let index in list) {
  console.log(`${index} : ${list[index]}`);
}

//for of loop
let peoples = ["huxn", "alex", "jordan", "brad"];
for (let people of peoples) {
  console.log(people);
}

const colors = ["red", "green", "blue", "teal"];
colors.forEach((color) => console.log(color));

//forEach modifies the original array while map creates a new array
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); //output: [2, 4, 6, 8, 10]

const computers = [
  { ram: 4, hdd: 100 },
  { ram: 8, hdd: 200 },
  { ram: 16, hdd: 300 },
  { ram: 32, hdd: 400 },
];
console.log(computers.filter((comp) => comp.ram < 16));

//Both every() and some() are array methods used to test elements against a condition.They return boolean(true or false)
//every() Method Checks if all elements in an array satisfy a condition
//some() Method Checks if at least one element in an array satisfies a condition


function calculateProduct(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
}

const digits = [120, 40, 50, 200, 70];
console.log(calculateProduct(digits));