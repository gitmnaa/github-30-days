package day15;

import java.util.ArrayList;
import java.util.List;

public class ExpenseTracker {

    private final List<Expense> expenses = new ArrayList<>();

    public void addExpense(Expense expense) {
        expenses.add(expense);
    }

    public double getTotal() {
        double total = 0;

        for (Expense expense : expenses) {
            total += expense.getAmount();
        }

        return total;
    }

    public void showExpenses() {
        for (Expense expense : expenses) {
            System.out.println(
                expense.getName() + ": $" + expense.getAmount()
            );
        }
    }

    public static void main(String[] args) {

        ExpenseTracker tracker = new ExpenseTracker();

        tracker.addExpense(new Expense("Food", 5.50));
        tracker.addExpense(new Expense("Transport", 3.00));
        tracker.addExpense(new Expense("Coffee", 2.50));

        tracker.showExpenses();

        System.out.println("Total: $" + tracker.getTotal());
    }
}
