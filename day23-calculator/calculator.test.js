const assert = require("node:assert/strict");
const { calculate, formatResult } = require("./calculator");

assert.equal(calculate(10, "+", 5), 15);
assert.equal(calculate(10, "-", 5), 5);
assert.equal(calculate(10, "*", 5), 50);
assert.equal(calculate(10, "/", 5), 2);
assert.equal(calculate(10, "%", 3), 1);
assert.equal(formatResult(0.1 + 0.2), "0.3");

assert.throws(() => calculate(10, "/", 0), /zero/);
assert.throws(() => calculate(10, "%", 0), /zero/);
assert.throws(() => calculate("abc", "+", 5), /Invalid number/);
assert.throws(() => calculate(10, "^", 2), /Unsupported operator/);

console.log("Day 23: all 10 tests passed!");
