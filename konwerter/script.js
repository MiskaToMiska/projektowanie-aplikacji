let konwerter_box = document.querySelector("#konwerter_box");
let przycisk = document.querySelector(".przycisk");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let result = document.querySelector(".result");

let convBtn = document.querySelector("#convert");
let resetBtn = document.querySelector("#reset");
let changeBtn = document.querySelector("#change");

let cels;
let fahr;

const swap = () => {
  if (one.textContent === "°C") {
    one.textContent = "°F";
    two.textContent = "°C";
  } else {
    one.textContent = "°C";
    two.textContent = "°F";
  }
};
function reset() {}
