const prices = [500, 1200, 800, 2000];

const total = prices.reduce((sum, price) => {
    const finalPrice = price > 1000 ? price * 0.9 : price;
    return sum + finalPrice;
}, 0);

console.log("Total after discount:", total);