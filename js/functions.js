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
    console.log(`${skaicius} -> ${kv}`);

    return kv;
}

console.log(skaiciusKv(2));
console.log(skaiciusKv(5));
console.log(skaiciusKv(9));
console.log(skaiciusKv(18));
console.log(skaiciusKv(-5));