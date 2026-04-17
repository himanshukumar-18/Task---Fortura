import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

const menu = {
    1: { name: "Burger", price: 100 },
    2: { name: "Pizza", price: 200 },
    3: { name: "Fries", price: 80 },
    4: { name: "Cold Drink", price: 50 }
};

let total = 0;

async function orderSystem() {
    let choice;

    do {
        console.log("\nMENU:");
        for (let key in menu) {
            console.log(`${key}. ${menu[key].name} - ₹${menu[key].price}`);
        }

        choice = await rl.question("Enter item number (0 to exit): ");

        if (choice == 0) break;

        if (!menu[choice]) {
            console.log("Invalid choice ❌");
            continue;
        }

        let qty = await rl.question("Enter quantity: ");
        qty = Number(qty);

        let itemTotal = menu[choice].price * qty;
        total += itemTotal;

        console.log(`${menu[choice].name} x ${qty} added. Subtotal: ₹${itemTotal}`);

    } while (choice != 0);

    // GST calculation (18%)
    let gst = total * 0.18;
    let finalBill = total + gst;

    console.log("\nBILL SUMMARY:");
    console.log("Subtotal: ₹", total);
    console.log("GST (18%): ₹", gst.toFixed(2));
    console.log("Final Total: ₹", finalBill.toFixed(2));

    rl.close();
}

orderSystem();