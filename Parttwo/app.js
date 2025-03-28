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

function multiply(a, b=1, c=10) {
    return a * b * c;
}
console.log(multiply(2, 2));  //output - 40

function giveMe4(a, b, c, d) {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("d", d);
}

colors = ["red", "green", "blue", "yellow"];
giveMe4(...colors); //output - a red, b green, c blue, d yellow

let people = ["huxn", "alex", "jordan"];
const allPeps = ["kumar", ...people, "james", "john"];
console.log(allPeps); //output - kumar huxn alex jordan james john

//make functions with a lot of parameters
function user(x, ...userData) { //x cannot be written after userData or will throw error
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
