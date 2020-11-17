function numLength(num) {
    // input validation / patikrinimas
    if (typeof num !== 'number') {
        return 'Pateikta netinkamo tipo reikšmė.'
    }
    if ('' + num === 'NaN') {
        return 'Pateikta netinkamo tipo reikšmė.'
    }
    if ('' + num === 'Infinity') {
        return 'Pateikta netinkamo tipo reikšmė.';
    }

    // logic // kaip skaiciuti, ka skaicciuoti
    const textNum = '' + num;
    let size = textNum.length;
    // jeigu skaicius su minusu
    if (num < 0) {
        console.log('Minusas');
        size--;
    }

    // desimtainiai / kaip atpazinti?
    // dalinit is 1
    if (num % 1 !== 0) {
        size--;
    }

    // return
    return size;
}
console.log(numLength(true));
console.log(numLength('asd'));
console.log(numLength(NaN));
console.log(numLength(Infinity));

console.log(numLength(5), '->', 1);
console.log(numLength(781), '->', 3);
console.log(numLength(37060123456), '->', 11);
console.log(numLength(4e7), '->', 8);
console.log(numLength(3.1415), '->', 5);
console.log(numLength(-3), '->', 1);
console.log(numLength(-5), '->', 1);

console.log(numLength(2.2), '->', 2);
console.log(numLength(3.1415), '->', 5);
console.log(numLength(-3.1415), '->', 5);
console.log('-------------------------------');
// neisprendziami
// console.log(1234342424456754356754676445676543, '->', 34);