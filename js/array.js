console.log('hello from array');

/*
Saraso tipo kintamieji:
    sinonimai: sarasa, masyvas, array, matrica*
    inicijuojama su lauztyniais sklausteliais
    viduje gali buti ivairiu tipu reiksmiu
    bet rekuomenduotina, kad butu tuk vieno tipo reiksmes
*/

// Pazymiai
// petriukoPazymaia = 2, 10, 7, 5, 2, 9;
// index                  0   1  2  3  4  5  6  7
// const petriukoPazymaia = [2, 10, 7, 5, 2, 9, 7, 1];
// console.log(petriukoPazymaia);

// suskaicioti pazymiu vidurki?
pPazymiai = [2, 10, 7, 5];

let suma = 0;
suma = suma + pPazymiai[0];
suma = suma + pPazymiai[1];
suma = suma + pPazymiai[2];
suma = suma + pPazymiai[3];
// suma = suma + pPazymiai[4];

const kiekis = pPazymiai.length;
const vidurkis = suma / kiekis;

console.log(vidurkis);

const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Anyksciai'];
console.log(miestai);
console.log(miestai[3]);
console.log(miestai[1]);
console.log(miestai[2]);
console.log(miestai[0]);
