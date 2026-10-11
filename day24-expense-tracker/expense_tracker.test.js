const test = require("node:test");
const assert = require("node:assert/strict");
const {
  addExpense,
  getTotal,
  getCategoryTotals
} = require("./expense_tracker");

test("adds an expense", () => {
  assert.equal(addExpense([], "Lunch", 25000, "Food").length, 1);
});

test("calculates total expenses", () => {
  const expenses = [
    { name: "Lunch", amount: 25000, category: "Food" },
    { name: "Bus", amount: 10000, category: "Transport" }
  ];
  assert.equal(getTotal(expenses), 35000);
});

test("groups expenses by category", () => {
  const expenses = [
    { name: "Lunch", amount: 25000, category: "Food" },
    { name: "Dinner", amount: 30000, category: "Food" }
  ];
  assert.deepEqual(getCategoryTotals(expenses), { Food: 55000 });
});

test("rejects invalid amounts", () => {
  assert.throws(
    () => addExpense([], "Lunch", -100, "Food"),
    /greater than zero/
  );
});
