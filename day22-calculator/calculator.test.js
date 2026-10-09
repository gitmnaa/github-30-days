const { calculate } = require("./calculator");

const tests = [
  ["addition", () => calculate(5, "+", 3), 8],
  ["subtraction", () => calculate(5, "-", 3), 2],
  ["multiplication", () => calculate(5, "*", 3), 15],
  ["division", () => calculate(6, "/", 3), 2],
];

let failed = 0;

for (const [name, run, expected] of tests) {
  try {
    const result = run();
    if (result !== expected) throw new Error(`Expected ${expected}, got ${result}`);
    console.log(`PASS: ${name}`);
  } catch (error) {
    failed++;
    console.log(`FAIL: ${name} - ${error.message}`);
  }
}

try {
  calculate(5, "/", 0);
  failed++;
  console.log("FAIL: division by zero");
} catch {
  console.log("PASS: division by zero protection");
}

if (failed > 0) process.exitCode = 1;
else console.log("\nAll tests passed!");
