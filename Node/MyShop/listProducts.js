faker = require('faker');

function generateItemInfo() {
    return [faker.commerce.productName(), faker.commerce.price()];
}

function generateItemList(arr) {
    for(var i = 0; i < 10; i++) {
        arr.push(generateItemInfo());
    }
}

function printItem(arr) {
    for(var i = 0; i < 10; i++) {
        msg = arr[i][0] + " - $" + arr[i][1];
        console.log(msg);
    }
}

items = [];
generateItemList(items);

console.log("===================");
console.log("WELCOME TO MY SHOP!");
console.log("===================");

printItem(items);
