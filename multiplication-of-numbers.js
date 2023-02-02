function multiplication (number){
    let result = 1;
    for (let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

const result = multiplication(9);
console.log(result);