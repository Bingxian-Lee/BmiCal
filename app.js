// Set variables
const feetInput = document.querySelector('#feet > input');
const centimetreInput = document.querySelector('#centimetre > input');
const inchesInput = document.querySelector('#inches > input');

// round number to display to the nearest whole number
function roundNum(num){ 
    return Math.round(num*100)/100;
}

// convert input of feet to cm and inches 
function feetToCentimetreAndInches() {
    const fTemp = parseFloat(feetInput.value);
    const cTemp = fTemp * 30.48;
    const iTemp = fTemp * 12;
    centimetreInput.value = roundNum(cTemp);
    inchesInput.value = roundNum(iTemp);
}

// convert input of cm to feet and inches
function centimetreToFeetAndInches() {
    const cTemp = parseFloat(centimetreInput.value);
    const fTemp = cTemp / 30.48;
    const iTemp = cTemp/2.54
    feetInput.value = roundNum(fTemp);
    inchesInput.value = roundNum(iTemp);
}

// convert input of inches to cm and feet
function inchesToCentimetreAndFeet() {
    const iTemp = parseFloat(inchesInput.value);
    const fTemp = iTemp / 12;
    const cTemp = iTemp * 2.54;
    centimetreInput.value = roundNum(cTemp);
    feetInput.value = roundNum(fTemp);
}

// get input and call the functions according to the unit keyed
function main(){
    centimetreInput.addEventListener('input',centimetreToFeetAndInches);
    feetInput.addEventListener('input',feetToCentimetreAndInches);
    inchesInput.addEventListener('input',inchesToCentimetreAndFeet);
};

main();
