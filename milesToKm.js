function milesToKm (miles) {
    const kilomerte = miles * 1.609;
    return kilomerte;
}

const totalMiles = 200;
const totalKilometer = milesToKm(totalMiles);
console.log(totalKilometer);