const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const sum = document.getElementById("sum");
const sub = document.getElementById("sub");
const mult = document.getElementById("mult");
const division = document.getElementById("division");
const percent = document.getElementById("percent");
const sqrt = document.getElementById("sqrt");
const dot = document.getElementById("dot");
const clear = document.getElementById("clear");
const display = document.getElementById("display");

one.addEventListener("click", eventClick);

function eventClick() {
  display.innerText += "1";
  return 0;
}

//
function createEvent(x) {
  x.addEventListener("click", function () {
    let aux = document.querySelector("#display");
    aux.innerText = x.value;
  });
}
createEvent(one);
