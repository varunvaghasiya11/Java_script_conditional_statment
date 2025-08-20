let age = 19;

if (age < 0) {
    console.log("Invalid age!");
} else if (age <= 12) {
    console.log("You are a Child.");
} else if (age <= 19) {
    console.log("You are a Teenager.");
} else if (age <= 35) {
    console.log("You are a Young Adult.");
} else if (age <= 59) {
    console.log("You are an Adult.");
} else {
    console.log("You are a Senior Citizen.");
}