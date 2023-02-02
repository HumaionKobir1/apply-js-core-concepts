/***
 * A factorial is a function that multiplies a numbers by every number below it till
 * 
 * 1! = 1
 * 2! = 2*1
 * 3! = 3 * 2 * 1
 * 4! = 4 * 3 * 2 * 1
 * 5! = 5 * 4 * 3 * 2 * 1
 * 
 * 
 * The factorial formula:  n! = n * (n-1)!
 * Example: 3! = 3 * 2!
 */

function factorial (number) {
    let resut = 1;
    for (let i = 1; i <= number; i++){
        resut = resut * i;
    }
    return resut;
}

const result = factorial (9);
console.log(result);



// Another way for Recursion


function factorialize (num){
    if (num < 0){
        return -1;
    }
    else if(num == 0){
        return 1;
    }
    else{
        return (num * factorialize (num - 1));
    }
}

const result2 = factorialize(5);
console.log(result2);