function getSumOfAnArray (numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers [index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

const myNumbers = [12, 54, 15, 17, 87, 98];
const mySum = getSumOfAnArray(myNumbers);
console.log(mySum);




/******************* ODD NUMBER *****************/
function getOddNumberOfAnArray (numbers){
    let oddNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];

        if(element % 2 != 0){
            // console.log(element);
            oddNumbers.push(element);
        }
        
    }
    return oddNumbers;
}

const yourNumbers = [12, 54, 15, 17, 87, 98];
const oddNumbers = getOddNumberOfAnArray(yourNumbers);
console.log(oddNumbers);

// odd number sum

const oddNumberSum = getSumOfAnArray (oddNumbers);
console.log(oddNumberSum);

