const num = document.querySelectorAll(".num");
const oper = document.querySelectorAll(".oper");
const reset = document.querySelector(".reset");
const display = document.querySelector(".display");

let total;
let start;
let nextOperation;

const setResults = (val) => {
  display.textContent = val.substr(0, 12);
};

function resetDisplay() {
  start = true;
  display.textContent = "0";
}

const clear = () => {
  nextOperation = "";
  total = 0;
  resetDisplay();
};

const calc = (n) => {
  let val = display.textContent;
  val = start ? n + "" : val + n;
  start = val === "0";
  setResults(val);
};

const operation = (operator) => {
  const n = parseInt(display.textContent);
  calculate(n);
  nextOperation = operator;
  setResults(total + "");
  if (total === Infinity) {
    console.log("err");
    return -1;
  }
  start = true;
};

const calculate = (n) => {
  switch (nextOperation) {
    case "+":
      total += n;
      break;
    case "-":
      total -= n;
      break;
    case "x":
      total *= n;
      break;
    case "/":
      total /= n;
      break;
    default:
      total = n;
      break;
  }
};

reset.addEventListener("click", clear);

num.forEach((number) => {
  number.addEventListener("click", (e) => {
    const {
      target: { textContent: value }
    } = e;
    calc(value);
  });
});

oper.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    const {
      target: { textContent: value }
    } = e;
    operation(value);
  });
});
clear();
