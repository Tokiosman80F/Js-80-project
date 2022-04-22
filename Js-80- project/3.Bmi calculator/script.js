// 1. DEFINE VARIABLE
let greenBtn = document.querySelector(".cal-btn");
let redBtn = document.querySelector(".rest-btn");
let showResult = document.querySelector(".show-result");
let input1 = document.querySelector("#weight-input");
let input2 = document.querySelector("#weight-input");
// 2. CREATE ADD EVENT LISTENER
greenBtn.addEventListener("click", calculate);
redBtn.addEventListener("click", reset);
// 3. CREATE FUNCTION
function calculate(e) {
  let weight = input1.value;
  e.preventDefualt();
}

function reset() {}
// 4.DEBUG THE CODE
let weight = input1.value;
console.log(weight);
