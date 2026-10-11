function addExpense(expenses, name, amount, category) {
  if (!name || !category) {
    throw new Error("Name and category are required");
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error("Amount must be greater than zero");
  }

  return [...expenses, { name, amount, category }];
}

function getTotal(expenses) {
  return expenses.reduce((sum, item) => sum + item.amount, 0);
}

function getCategoryTotals(expenses) {
  return expenses.reduce((totals, item) => {
    totals[item.category] = (totals[item.category] || 0) + item.amount;
    return totals;
  }, {});
}

module.exports = { addExpense, getTotal, getCategoryTotals };
