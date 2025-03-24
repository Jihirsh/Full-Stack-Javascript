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