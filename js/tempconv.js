var celciusinput = document.querySelector('#celciusleft>input');
var farenheitinput = document.querySelector('#farenheitleft > input');
var kelvininput = document.querySelector('#kelvinleft >  input');

function roundNumbers(num) {
    return Math.round(num * 100) / 100;
}

function celciustofarenheittokelvin() {
    var cTemp = parseFloat(celciusinput.value);
    var fTemp = (cTemp * (9 / 5)) + 32;
    var kTemp = cTemp + 273.15;
    farenheitinput.value = roundNumbers(fTemp);
    kelvininput.value = roundNumbers(kTemp);
}

function farenheittocelciustokelvin() {
    var fTemp = parseFloat(farenheitinput.value);
    var cTemp = (fTemp - 32) * (5 / 9);
    var kTemp = (fTemp + 459.67) * (5 / 9)
    celciusinput.value = roundNumbers(cTemp);
    kelvininput.value = roundNumbers(kTemp);
}

function kelvintocelciustofarenheit() {
    var kTemp = parseFloat(kelvininput.value);
    var fTemp = (9 / 5) * (kTemp - 273) + 32;
    var cTemp = kTemp - 273.15;
    farenheitinput.value = roundNumbers(fTemp);
    celciusinput.value = roundNumbers(cTemp);
}

function main() {
    celciusinput.addEventListener('input', celciustofarenheittokelvin);
    farenheitinput.addEventListener('input', farenheittocelciustokelvin);
    kelvininput.addEventListener('input', kelvintocelciustofarenheit);
}

main();