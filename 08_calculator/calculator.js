const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const sum = (num1, num2) => {
  return
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const power = (num1, num2) => {
  return Math.pow(num1, num2);
};

const factorial = n => {
  if (n === 0) {
    return false
  } else {
    return n * factorial(n - 1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
