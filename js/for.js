
for (let i=0; i < 5; i++) { /* i = i + 1*/
    // logika
    console.log('Labas rytas!', i);
}

console.log('----------------------------');
/*
Jei kas menesi zmogus uzdirba 5000, tai kiek jis tures pajamu per metus?
*/
const alga = 5000;
const menesiu = 12;
let pajamos = 0;

for (let i=1; i <= menesiu; i = i + 1) {
    pajamos = i * alga;
    // pajamos = pajamos + alga;
    console.log(`${i}) ${pajamos} pinigu.`);
}

console.log('-----------------------------');

/*
Parasyti skaicius nuo 8 iki 4 imtinai
*/

for (let i = 8; i >= 4; i--) {
    console.log(i);
}

console.log('-----------------------------');

/*
Isvardinti ciferblato skaiciu nuo duotos valandos iki galo. (imtinai)
*/

const valanda = 3;
const maxValandu = 12;
for (let val = valanda; val <= maxValandu; val++) {
    console.log(val + ' val');
}

console.log('-----------------------------');

/*
Duotas miestu sarasas. Isvardinti kiekviena aplankyta miesta.
Spausdiname:
Spausdiname: "Aplankiau: Miesto pavadinimas."
*/

const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Anyksciai'];


console.log(`Aplankaiau: ${miestai[0]}`);

for (let i = 0; i < miestai.length; i++) {
    console.log(`Aplankaiau: ${miestai[i]}`);
}

console.log('-----------------------------');
