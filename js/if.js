/*
*Palyginimo salyga (if):
   - galimi operatoriai: >, <, >=, <=, == (palyginimas ar yra lygu), != (nelygu), === (ir tipas ir verte), !==;
   - naudotini:  >, <, >=, <=, ===, !==
   - nenauduotini: ==, !=
*/

/*
*Galimos strukturos:
    -if () {};
    -if () {} else {};
    -if () {} else if () {}... else if () {}... else {};
*/

const accountBalance = 200;
const transfer = 200;

// (palyginimo operacija)
if (accountBalance < transfer) {
    // logika
    console.log('Banko zinute: saskaitoje truksta pinigu.');
};

if (accountBalance >= transfer) {
    console.log('Banko zinute: pavedimas padarytas.');
};

// salyga tenkinama
if (accountBalance >= transfer) {
    console.log('Banko zinute: pavedimas padarytas.');
} else { // salyga netenkinama
    console.log('Banko zinute: saskaitoje truksta pinigu.');
};

const akys = 'pilkos';

if (akys == 'melynos') {
    console.log('Grazios sirdies zmogus');
} else if (akys == 'zalios'){
    console.log('Ne melynakiai...do');
} else if (akys == 'raudonos') {
    console.log('Programuotojas...');
} else {
    console.log('A tu turi akys???');
};

console.log('Pirmas bandymas baigtas. Kas toliau?...');
const akys2 = 'raudonos';

if (akys2 == 'melynos') {
    console.log('Grazios sirdies zmogus'); // tik jeigu tenkina
} else {
   if (akys2 == 'zalios') {
    console.log('Ne melynakiai...do\'h');
   } else {
    if (akys2 == 'raudonos') {
        console.log('Programuotojas...');
    } else {
        console.log('A tu turi akys???');
    }
   }
};

console.clear();
const pirmas = 8;
const antras = '8';

if (pirmas !== antras) {
    console.log(true);
} else {
    console.log(false)
};

// reference to ASCII table
const zodis1 = 'a';
const zodis2 = 'b';

if (zodis1 < zodis2) {
    console.log(true);
} else {
    console.log(false)
};
