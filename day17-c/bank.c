#include <stdio.h>

typedef struct {
    char owner[50];
    double balance;
} Account;

void deposit(Account *account, double amount) {
    if (amount > 0) {
        account->balance += amount;
    }
}

void withdraw(Account *account, double amount) {
    if (amount > 0 && amount <= account->balance) {
        account->balance -= amount;
    }
}

void show_account(Account account) {
    printf("Owner: %s\n", account.owner);
    printf("Balance: %.2f\n", account.balance);
}

int main(void) {
    Account account = {"GitHub User", 100.00};

    deposit(&account, 50.00);
    withdraw(&account, 25.00);

    show_account(account);

    return 0;
}
