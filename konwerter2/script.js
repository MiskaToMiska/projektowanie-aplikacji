const konwerterBox = document.querySelector("#konwerter_box");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const result = document.querySelector(".result");

const convBtn = document.querySelector("#convert");
const resetBtn = document.querySelector("#reset");
const changeBtn = document.querySelector("#change");

const btnMKM = document.querySelector("#m_km");
const btnMFT = document.querySelector("#m_ft");
const btnMMI = document.querySelector("#m_mi");
const btnMIKM = document.querySelector("#mi_km");

const swap = () => {
  const temp = one.textContent;
  one.textContent = two.textContent;
  two.textContent = temp;
  result.textContent = "";
};

const reset = () => {
  konwerterBox.value = "";
  result.textContent = "";
};

const convert = () => {
  const value = parseFloat(konwerterBox.value);

  if (isNaN(value)) {
    result.textContent = "Wpisz liczbę!";
    return;
  }

  const u1 = one.textContent;
  const u2 = two.textContent;
  let res = 0;

  if (u1 === "m" && u2 === "ft") res = value * 3.28084;
  else if (u1 === "ft" && u2 === "m") res = value / 3.28084;
  else if (u1 === "m" && u2 === "km") res = value / 1000;
  else if (u1 === "km" && u2 === "m") res = value * 1000;
  else if (u1 === "m" && u2 === "mi") res = value / 1609.344;
  else if (u1 === "mi" && u2 === "m") res = value * 1609.344;
  else if (u1 === "mi" && u2 === "km") res = value * 1.60934;
  else if (u1 === "km" && u2 === "mi") res = value / 1.60934;

  result.textContent = `${res.toFixed(2)} ${u2}`;
};

btnMKM.addEventListener("click", () => {
  one.textContent = "m";
  two.textContent = "km";
  result.textContent = "";
});

btnMFT.addEventListener("click", () => {
  one.textContent = "m";
  two.textContent = "ft";
  result.textContent = "";
});

btnMMI.addEventListener("click", () => {
  one.textContent = "m";
  two.textContent = "mi";
  result.textContent = "";
});

btnMIKM.addEventListener("click", () => {
  one.textContent = "mi";
  two.textContent = "km";
  result.textContent = "";
});

convBtn.addEventListener("click", convert);
resetBtn.addEventListener("click", reset);
changeBtn.addEventListener("click", swap);
