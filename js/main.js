// spausdiname sveikaji skaiciu
console.log(45454545); // sveikasis skaicius

// du skaiciai vs desimtainis - kaip vekia ir koks kablialis
console.log(3, 14);
console.log(3.14); // desimtainiai

// kaip spausinamas tekstas?
console.log('Labas rytas');
console.log('Ana');
console.log('Visnevksaja');
console.log('1997 10 08');

/* *******************
* KINTAMIEJI
******************* */

/* *******************
Iniviavimo budai:
const - defaul, tai musu pirmasis pasirtinkimas
let - galima, tik jei yra reikalas keisti reiskme
var - nenaudotonas
******************* */

/* *******************
Kintamuju tipai (pagal reiskmes):
skaiciai (numer) - 2020, 3.14, -5.144
tekstiniai (string) - 'labas', 'hello', 'emoji'
logines (boolean) - true, false
sarasai (array) - []
objektai (objecy) - {}
******************* */

// negali keistis - cosnt
const piermasSkaicius = 2;
const antrasSkaicius = 3;

console.log("Pirmasis skaicius turetu buti 2");
console.log(piermasSkaicius);

console.log("Antrasis skaicius turetu buti 3");
console.log(antrasSkaicius);

const sum = piermasSkaicius + antrasSkaicius;
console.log(sum);

console.log(piermasSkaicius, '+', antrasSkaicius, '=', sum);

const vardas = 'Vardenis';
const amzius = 23;
console.log(vardas);
console.log(amzius);

// isspausdinti Vardenis yra 99 metu amziaus
//              ________ yra ___ metu amziaus

const sakinys = vardas + ' yra ' + amzius + ' metu amziaus.';
console.log(sakinys);

const suo = 'Rikis';
const maistas = 'kaulas';

// Rikis megstamas maistas yra kaulas.
const sakinys2 = suo + ' megstamas maistas yra ' + maistas + '.';
console.log(sakinys2);

const heroName = 'Chuck';
const heroLastName = 'Norris';
const birth = 1940;
const currentYear = 2020;
const age = currentYear - birth;

// Chuck Norris (80);
const sakinys3 = heroName + ' ' +  heroLastName + ' ' + '(' + (2020 - birth) + ')' + '.';
// const sakinys3 = heroName + ' ' +  heroLastName + ' ' + '(' + age + ')';
console.log(sakinys3);

console.clear();
let pinigine = 7;
const sausis = 100;
const vasaris = 300;
const kovas = 70;

// rezultatas konsoleje
//107
//207
const sausioPajamos = pinigine + sausis;
console.log(sausioPajamos);

const vasarioPajamos = pinigine + vasaris;
console.log(vasarioPajamos);

console.log(pinigine);

pinigine = pinigine + sausis; // 7 + 100
console.log(pinigine); // 107

pinigine = pinigine + vasaris; // 107 + 300
console.log(pinigine); // 407