const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const square = document.querySelector(".square");

const fun1 = () => {
  console.log("czesc");
};

const func2 = () => {
  square.style.backgroundColor = "pink";
};

const func3 = () => {
  square.style.backgroundColor = "blue";
};

const func4 = () => {
  p1.classList.toggle("show");
  p2.classList.toggle("show");
};

btn1.addEventListener("click", fun1);
square.addEventListener("mouseover", func2);
square.addEventListener("mouseleave", func3);
btn2.addEventListener("click", func4);
