/* **********************
SKAICIAI
    - sveikeji
    - desimtainiai
    - teigiami/neigiami
    - NaN
    - Infinity
    - -Infinity
********************** */
function tusciaFunkcija () {
    return false;
};

console.log(tusciaFunkcija());

function multiply(a, b) {
    // input valdation
    if (typeof a !== 'number') {
        console.log('ERROR: pirmoji reiksme ne skaiciaus tipo.');
        return false;
    };
    if ('' + a === 'NaN') {
    // if (isNaN(b)) {
        console.log('ERROR: pirmoji reiksme ne normalus tipo.');
        return false;
    };

    if (typeof b !== 'number') {
        console.log('ERROR: antroji reiksme ne skaiciaus tipo.');
        return false;
    };
    if ('' + b === 'NaN') {
    // if (isNaN(b)) {
        console.log('ERROR: antroji reiksme ne normalus tipo.');
        return false;
    };


    // function logic
    const rez = a * b;

    // function rezult
    return rez;
}

console.log(multiply(8, 'labas'));
console.log(multiply('aye', 'labas'));
console.log(multiply([], 'labas'));
console.log(multiply([7, 8, 8], '8'));
console.log(multiply(8, 'labas'));
console.log(multiply('8', 'labas'));

console.log(multiply(8, 5));
console.log(multiply(5, 1));
console.log(multiply(7, 8));
console.log(multiply(6, 2));
console.log(multiply(2, Infinity));

console.log(multiply(2, NaN));
console.log(multiply(NaN, 2));
