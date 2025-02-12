const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const numerals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
const romans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

function convertToRoman() {
  let userInput = number.value;
  output.innerText = "";

  if (!number.value) {
    output.innerText = "Please enter a valid number";
    return;
  }
  if (number.value < 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  if (number.value >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  for (let i = 0; i < romans.length; i++) {
    while (userInput >= numerals[i]) {
      userInput -= numerals[i];
      output.innerText += romans[i];
    }
  }
}
convertBtn.addEventListener("click", convertToRoman);
number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convertToRoman();
  }
});
