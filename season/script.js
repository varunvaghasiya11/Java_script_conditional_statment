let month = 7;

switch (true) {
    case (month >= 1 && month <= 4):
        console.log("Winter");
        break;
    case (month >= 5 && month <= 8):
        console.log("Summer");
        break;
    case (month >= 9 && month <= 12):
        console.log("Monsoon");
        break;
    default:
        console.log("Invalid season");
}