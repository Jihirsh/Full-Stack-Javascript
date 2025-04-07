const secondBtn = document.querySelector(".secondBtn");
//Second Button
secondBtn.onclick = function() {
    console.log("Jihi");
};


// function greetings() {
//     console.log("Hello Jihirsh");
// };

//Best
const best = document.querySelector(".best");
best.addEventListener("click", ()=> {
    console.log("Arrow function");
});


//EVENT OBJECT
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(input.value); 
});