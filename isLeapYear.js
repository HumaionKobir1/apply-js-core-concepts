function isLeapYear (year) {
    const remainder = year % 4;
    if (remainder === 0){
        // console.log('Your year is a leap year');
        return true;
    }
    else{
        // console.log('Your year is not a leap year');
        return false;
    }
}

const isMyYearLeapYear = isLeapYear(1991);
const isHerYearLeapYear = isLeapYear(1960);
console.log(isMyYearLeapYear, isHerYearLeapYear);


/*************************** OR *********************/

function leapYear(year){
    var result; 

    if (year/400){
      result = true
    }
    else if(year/100){
      result = false
    }
    else if(year/4){
        result= true
      }
    else{
      result= false
    }
    return result
 }

 const myYear = leapYear (1990);
 console.log(myYear);