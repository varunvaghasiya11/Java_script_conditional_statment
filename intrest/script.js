var P = 10000;   
var N = 7;      
var R;           
var I;           

if (N > 3) {
    if (N <= 5) {
        R = 3;
    } else {
        if (N <= 8) {
            R = 5;
        } else {
            if (N <= 12) {
                R = 12;
            } else {
                R = 15;
            }
        }
    }
} else {
    R = 0; 
}

I = (P * R * N) / 100;
console.log("Principal Amount (P): " + P);
console.log("No. of Years (N): " + N);
console.log("Rate of Interest (R): " + R + "%");
console.log("Total Interest (I): " + I);