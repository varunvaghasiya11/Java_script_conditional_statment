let units = 275;
let amount = 0;

if (units <= 50) {
    amount = units * 1;
} 
else if (units <= 150) {
    amount = (50 * 1) + ((units - 50) * 2);
} 
else if (units <= 250) {
    amount = (50 * 1) + (100 * 2) + ((units - 150) * 3);
} 
else {
    amount = (50 * 1) + (100 * 2) + (100 * 3) + ((units - 250) * 4);
}


if (units > 150) {
    amount = amount + (amount * 0.20);
}

console.log("Units: " + units);
console.log("Total Bill: Rs. " + amount);