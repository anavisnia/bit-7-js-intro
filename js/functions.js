console.log('Hello from function.js');

/* ***********************
SUMA
*********************** */

// const pirmas1 = 4;
// const antras1 = 7;
// const suma1 = pirmas1 + antras1;
// console.log(`${pirmas1} + ${antras1} = ${suma1}`);

// const pirmas2 = 8;
// const antras2 = 9;
// const suma2 = pirmas2 + antras2;
// console.log(`${pirmas2} + ${antras2} = ${suma2}`);

// const pirmas3 = 88;
// const antras3 = 99;
// const suma3 = pirmas3 + antras3;
// console.log(`${pirmas3} + ${antras3} = ${suma3}`);

// kintamuju ppavadinimai gyvena tik funkcijoje
// funkcija - tai sablonas
function sumavimas(a, b) {
    const suma = a + b;
    console.log(`${a} + ${b} = ${suma}`);
};

sumavimas(2, 5);
sumavimas(22, 55);
sumavimas(-8, 17);

function pazymiuVydurkis(list) {
    // console.log(list);
    let suma = 0;
    const kiekis = list.length;

    for (let i = 0; i < kiekis; i++) {
        const pazymys = list[i];
        suma = suma + pazymys;
    }

    const vidurkis = suma / kiekis;

    if (kiekis === 0) {
        console.log('Neturi pazymiu...');
    } else {
        console.log(`Vidurkis: ${vidurkis}.`);
    }
};

pazymiuVydurkis([5, 8, 9]);
pazymiuVydurkis([]);
pazymiuVydurkis([10, 10, 10, 10, 10, 10]);

// pakelti kvadratu
function skaiciusKv(skaicius) {
    const kv = skaicius * skaicius;
    return kv;
}

const duKv = skaiciusKv(2);
const trysKv = skaiciusKv(3);

console.log(duKv);
console.log(trysKv);
console.log(skaiciusKv(18));
console.log(skaiciusKv(-5));

console.clear();
// a3 = a * a * a;
    // return base ** power;
    // return Math.pow(base, power);

function laipsnis(base, power) {

    let rez = 1;
    for (let i = 0; i < power; i++) {
        rez = rez * base;
    };

    return rez;
};

const kubas2 = laipsnis(2, 3);
console.log(kubas2, '->', 8);

const du10 = laipsnis(2, 10);
console.log(du10, '->', 1024);

const minus5 = laipsnis(-5, 3);
console.log(minus5, '->', -125);

function faktorialas(n) {
    let rez = 1;

    for (let i = 1; i <= n; i++) {
        rez = rez * i;
    }

    return rez;
}

const f0 = faktorialas(0);
const f1 = faktorialas(1);
const f2 = faktorialas(2);
const f3 = faktorialas(3);
const f4 = faktorialas(4);
const f5 = faktorialas(5);

console.log(f0, '->', 1);
console.log(f1, '->', 1);
console.log(f2, '->', 2);
console.log(f3, '->', 6);
console.log(f4, '->', 24);
console.log(f5, '->', 120);

console.log('---------------------------------');
function lyginisFaktorialas(n) {
    let rez = 1;
    for (let i = 1; i<= n; i++) {
        if (i%2 === 0) {
            rez = rez * i;
        }
    }
    return rez;
}

// 1 * 2 * 4 * 6 * 8
const lf0 = lyginisFaktorialas(0);
const lf1 = lyginisFaktorialas(1);
const lf2 = lyginisFaktorialas(2);
const lf3 = lyginisFaktorialas(3);
const lf4 = lyginisFaktorialas(4);
const lf5 = lyginisFaktorialas(5);
const lf6 = lyginisFaktorialas(6);
const lf7 = lyginisFaktorialas(7);

console.log(lf0, '->', 1);
console.log(lf1, '->', 1);
console.log(lf2, '->', 2);
console.log(lf3, '->', 2);
console.log(lf4, '->', 8);
console.log(lf5, '->', 8);
console.log(lf6, '->', 48);
console.log(lf7, '->', 48);