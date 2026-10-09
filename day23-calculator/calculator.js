function calculate(a, operator, b) {
  const x = Number(a);
  const y = Number(b);

  if (!Number.isFinite(x) || !Number.isFinite(y)) {
    throw new Error("Invalid number");
  }

  switch (operator) {
    case "+": return x + y;
    case "-": return x - y;
    case "*": return x * y;
    case "/":
      if (y === 0) throw new Error("Cannot divide by zero");
      return x / y;
    case "%":
      if (y === 0) throw new Error("Cannot modulo by zero");
      return x % y;
    default:
      throw new Error("Unsupported operator");
  }
}

function formatResult(value) {
  if (!Number.isFinite(value)) return "Error";
  return Number(value.toPrecision(12)).toString();
}

module.exports = { calculate, formatResult };
