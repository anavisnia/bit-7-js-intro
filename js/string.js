const vardas = 'Vardenis';
const pasisveikinimas = "Labas rytas, Lietuva!";
console.log(pasisveikinimas);

const neiginys = "don't";
console.log(neiginys);

// Jis pasake: "Labas"
const fraze = 'Jis pasake: "Labas!"';
console.log(fraze);

// Mother said "Dont't do it!"
const mother1 = `"Mother said: "Don't do it!"`;
const mother2 = "Mother said: \"Don't do it!\".";
const mother3 = 'Mother said: "Don\'t do it!".';
console.log(mother2);

//  \ 
const html = '<div>\
    <p>Lorem, ipsum</p>\
    <a href="#">Click</a>\
</div>';

console.log(html);

// backtick
const html2 = `<div>
<p>Lorem, ipsum its amet</p>
<a href="#">Don't Click</a>
</div>`;
console.log(html2);

console.clear();
// Joniukas ir Gretute ejo i miska.
const berniukas = 'Joniukas';
const mergaite = 'Gretute';
const vieta = 'miska';
const judejimoBudas = 'ejo';

// const pasaka = berniukas + ' ir ' + mergaite + ' ' + judejimoBudas + ' i ' + vieta + '.';
const pasaka = `${berniukas} ir ${mergaite} ${judejimoBudas} i ${vieta}.`;

console.log(pasaka);

// Chuck Norris
const heroName = 'Chuck';
const heroLastName = 'Norris';
const birth = 1940;

const heroSays = `${heroName} ${heroLastName} (${2020 - birth}).`;
console.log(heroSays);