console.log("heyy");
//1
const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

//6
function roundNum(num) {
    return Math.round(num * 100) / 100;
    //3.141414  => initial no. for ex. 
    //314.1414  => multiply by 100
    //314       => round off
    //3.14      => devide by 100  
}
//2
function fromCelciusConverter() {
    const cTemp = parseFloat(celciusInput.value);

    const fTemp = (cTemp * (9 / 5)) + 32;
    // console.log(fTemp);
    kTemp = cTemp + 273.15;

    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}
//3
function fromFahrenheitConverter() {
    const fTemp = parseFloat(fahrenheitInput.value);

    const cTemp = (fTemp - 32) * (5 / 9);

    kTemp = (fTemp + 459.67) * (5 / 9);

    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}
//4
function fromKelvinConverter() {
    const kTemp = parseFloat(kelvinInput.value);

    const cTemp = kTemp - 273.15;

    fTemp = (kTemp * (9 / 5)) - 459.67

    celciusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
}

//5

function main() {
    celciusInput.addEventListener('input', fromCelciusConverter);

    fahrenheitInput.addEventListener('input', fromFahrenheitConverter);

    kelvinInput.addEventListener('input', fromKelvinConverter);
}

main();