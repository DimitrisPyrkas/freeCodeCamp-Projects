const input = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

checkButton.addEventListener("click", () => {
  const telNums = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  if (!input.value) {
    return alert("Please provide a phone number");
    } else if(telNums.test(input.value)) {
      results.innerText = `Valid US number: ${input.value}`;
    }else {
      results.innerText = `InValid US number: ${input.value}`;
    }
});
clearButton.addEventListener("click", () => 
  results.innerText = "");


