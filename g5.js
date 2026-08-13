console.clear();
console.log("inventory entry system");
console.log();
const promt=-require("prompt-sync")();
let stock = [];
{
    let item =Number( promt("Enter item name: "));
    stock.push(item);
}
while (true) {
    let item =Number( promt("Enter item name: "));
    if (item === 0) {
        break;
    }
    stock.push(item);
}
console.log("Stock items:", stock); 
console.log("Total items in stock:", stock.length);
const totalValue = stock.reduce((acc, item) => acc + item, 0);
console.log("Total value of stock:", totalValue);
console.log("\n inventory entry complete!");
console.log("\n update stock items:");
while (true) {
    let item =Number( promt("Enter item name to update (or 0 to finish): "));
    if (item === 0) {
        break;
    }
    const index = stock.indexOf(item);
    if (index !== -1) {
        let newItem =Number( promt("Enter new item name: "));
        stock[index] = newItem;
        console.log(`Item ${item} updated to ${newItem}.`);
    } else {
        console.log(`Item ${item} not found in stock.`);
    }
console.log("\nThank you for using the inventory entry system!");
