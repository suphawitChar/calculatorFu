let buttons = document.querySelectorAll(".num-button");
let resultBox = document.querySelector("#result-box");
let clear_buttons = document.querySelector('#clear');
let equal = document.querySelector("#equal");
let history =[];
let btnSpread = [...buttons];

// Number Inputs
btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    // Inner Values for calculator
    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }
    let value = buttons[i].innerHTML;
    resultBox.innerHTML += value;
  });
});

// equal
equal.addEventListener('click', ()=> {
let allInputs = resultBox.innerHTML;
resultBox.innerHTML = evaluate(allInputs);
console.log(evaluate(allInputs));
history[history.length]= allInputs.toString()+' = '+evaluate(allInputs);
console.log(history);
history.innerHTML = history;
// show array ul/li
let text = "<ul>";
history.forEach(myFunction);
text += "</ul>";
function myFunction(value) {
  text += "<li>" + value + "</li>";
} 
document.querySelector("#History").innerHTML = text;
})

function evaluate(fn) {
  return new Function('return ' + fn)();
}

// clear
clear_buttons.addEventListener('click', ()=> {
    resultBox.innerHTML = "0";
})



