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
const reset = () => {
  result.textContent = "";
};
const convert = () => {
  if (one.textContent === "°C") {
    cels = parseFloat(konwerter_box.value);
    fahr = (cels * 9) / 5 + 32;
    result.textContent = `${fahr.toFixed(2)}°F`;
  } else if (one.textContent === "°F") {
    fahr = parseFloat(konwerter_box.value);
    cels = ((fahr - 32) * 5) / 9;
    result.textContent = `${cels.toFixed(2)}°C`;
  }
};

convBtn.addEventListener("click", convert);
resetBtn.addEventListener("click", reset);
changeBtn.addEventListener("click", swap);
