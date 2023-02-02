// const myInches = 12;
// const myFeet = myInches / 12;
// console.log(myFeet);


// const inches = 144;
// const feet = inches / 12;
// console.log(feet);

// 

function inchToFeet (inches) {
    const feet = inches / 12;
    return feet;
}
const myInches = 144;
const myFeet = inchToFeet(myInches);
console.log(myFeet);

const yourInches = 168;
const yourFeet = inchToFeet(yourInches);
console.log(yourFeet);