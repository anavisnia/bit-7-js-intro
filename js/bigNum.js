function bigNum(list) {
    // input validation
    if (typeof list !== 'object') {
        return 'Netinkamas tipas.'
    }
    const size = list.length;
    if (size === 0) {
        return 'Sarasas yra tuscias.'
    }

    // logic
    let biggestNum = -Infinity;

    for (let i=1; i < size; i++) {
        const num = list[i];

        // saraso elemento tipo validacija
        if (typeof num !== 'number') {
            continue; // if panauduota for cikle - pereina daro logica toliau
        }

        // logika
        if (num > biggestNum) {
            biggestNum = num;
        }
    }

    // post logic validation
    if (biggestNum === -Infinity) {
        return 'Sarase nerastas nei vienas normalus skaicius.'
    }

    //return
    return biggestNum;
}
console.log(bigNum('pomidoras'));
console.log(bigNum(585));
console.log(bigNum(true));
console.log(bigNum(false));
console.log(bigNum([]));
console.log(bigNum([-Infinity, NaN, true, false, [], [7], [6, 1], undefined]));

console.log(bigNum([1]), '->', 1);
console.log(bigNum([77]), '->', 77);
console.log(bigNum([1,2,3]), '->', 3);
console.log(bigNum([1,2,3,2,1]), '->', 3);
console.log(bigNum([-5,78,3,2,1]), '->', 78);
console.log(bigNum([69,69,69,69,66]), '->', 69);
console.log(bigNum([-1,-2,-3,-4,-5,-6,-7,-8]), '->', -1);
console.log(bigNum([-1,-2,-3,79,-5,-6,-7,-8]), '->', 79);

console.log(bigNum([1,2,3,2,1], 'labas'), '->', 3);
console.log(bigNum([1,2,3,'labas',2,1]), '->', 3);
console.log(bigNum(['labas',1,2,3,2,1]), '->', 3);
console.log(bigNum(['labas','labas','labas','labas','labas','labas',1]), '->', 1);
console.log(bigNum(['labas','labas','labas','labas',-9999999]), '->', -9999999);

console.log(bigNum([1,2,3,2,NaN,1]), '->', 3);
console.log(bigNum([NaN,1,2,3,2,1]), '->', 3);
console.log(bigNum([1,2,3,NaN,2,1]), '->', 3);
