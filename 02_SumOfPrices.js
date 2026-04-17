const product_prices = [10.99, 5.99, 3.50, 8.25];

const total_sum = product_prices.reduce((acc, price) => acc + price, 0);

console.log("Total sum of product prices:", total_sum);