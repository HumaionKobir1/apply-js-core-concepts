function isEven (number) {
    const remainder = number % 2;
    // return remainder;
    if (remainder === 0){
        // console.log('number is even');
        return true;
    }
    else{
        // console.log('number is odd');
        return false;
    }
}


const myNumberIsEven = isEven(300);
const herNumberIsEven =  isEven(1281);
console.log(myNumberIsEven, herNumberIsEven);