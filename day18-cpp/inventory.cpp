#include <iostream>
#include <vector>
#include <string>

using namespace std;

struct Product {
    string name;
    int quantity;
};

class Inventory {
private:
    vector<Product> products;

public:
    void addProduct(string name, int quantity) {
        products.push_back({name, quantity});
    }

    int totalItems() {
        int total = 0;

        for (const auto& product : products) {
            total += product.quantity;
        }

        return total;
    }

    void showProducts() {
        for (const auto& product : products) {
            cout << product.name
                 << " - "
                 << product.quantity
                 << endl;
        }
    }
};

int main() {
    Inventory inventory;

    inventory.addProduct("Laptop", 5);
    inventory.addProduct("Keyboard", 10);
    inventory.addProduct("Mouse", 15);

    inventory.showProducts();

    cout << "Total items: "
         << inventory.totalItems()
         << endl;

    return 0;
}
