<?php

class ProductCatalog
{
    private array $products = [];

    public function addProduct(string $name, float $price): void
    {
        $this->products[] = [
            "name" => $name,
            "price" => $price
        ];
    }

    public function totalValue(): float
    {
        $total = 0;

        foreach ($this->products as $product) {
            $total += $product["price"];
        }

        return $total;
    }

    public function showProducts(): void
    {
        foreach ($this->products as $product) {
            echo $product["name"] . " - $" . $product["price"] . PHP_EOL;
        }
    }
}

$catalog = new ProductCatalog();

$catalog->addProduct("Laptop", 800);
$catalog->addProduct("Keyboard", 50);
$catalog->addProduct("Mouse", 25);

$catalog->showProducts();

echo "Total value: $" . $catalog->totalValue() . PHP_EOL;

?>
