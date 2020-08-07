function tempCToF(celsius) {

    var cTemp = celsius;
    var cTofahr = cTemp * 9 / 5 + 32;
    var temperature = cTemp + cToFahr;
    console.log(temperature);
}

function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel =(fTemp - 32) * 5 / 9;
    var temperature = fTemp + fToCel;
    console.log(temperature);
}