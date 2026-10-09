function calculate(a, operator, b) {
  a = Number(a);
  b = Number(b);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error("Input must be valid numbers");
  }

  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) throw new Error("Cannot divide by zero");
      return a / b;
    default:
      throw new Error("Invalid operator");
  }
}

module.exports = { calculate };
