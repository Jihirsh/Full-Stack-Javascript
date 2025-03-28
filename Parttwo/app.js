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