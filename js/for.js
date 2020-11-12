
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
/*
Isvardinti saraso narius is galo
*/
const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(abc);

for (let pozicija = abc.length - 1; pozicija >= 0; pozicija--) {
    console.log(abc[pozicija]);
}
console.log('-----------------------------');
console.clear();
// istraukti is zodzio norimos reides pozicija

// const text = 'dodekahedronas';
const text = 'ottoman';

console.log(text);
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
// ispauzdinti zodzio ilgi
console.log(text.length);
// atspausditi zodzio kiekviena raide
for (let i=0; i<text.length; i++) {
    console.log(text[i]);
}

console.log('-----------------------------');

/*
Duodamas zodis ir is jo reikia isrenkti kas antra raide ir ispauzdint kas gaunasi.
pvz: abcdef -> bdf
pvz: pomidoras (2) -> aiao
pvz: pomidoras (3) -> mos
pvz: pomidoras (4) -> ia
pvz: pomidoras (5) -> d
*/
const myText = 'abcdef';
let atsakymas = '';
for (let i = 1; i <= myText.length; i = i + 2) {
    raide = myText[i];
    atsakymas = atsakymas + raide;
    console.log(raide);
}
console.log(atsakymas);
console.log('-----------------------------');

// universalus sprendimas
const zodis = 'pomidoras';
const step = 4;
const pirmRaidesPozicija = step - 1;
let rez = '';

for (i = pirmRaidesPozicija; i < zodis.length; i = i + step) {
    const raides = zodis[i];
    console.log(raides);
    rez = rez + raides;
}
console.log(rez);