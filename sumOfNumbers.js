// let sum = 0;
// for (let i = 0; i <= 7; i++){
//     sum = sum + i;
//     console.log(sum);
// }

function sumOfNumbers (number){
    let sum = 0;
    for (let i = 0; i <= number; i++){
        sum = sum + i;
    }
    return sum;
}
const myNumber = sumOfNumbers (7);
console.log(myNumber);
