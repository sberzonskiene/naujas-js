function intervalCount(start, end, divider) {
    if (typeof start !== 'number') {
        return 'Intervalo pradzia turi buti skaicius.';
    }
    if (typeof end !== 'number') {
        return 'Intervalo pabaiga turi buti skaicius.';
    }
    if (typeof divider !== 'number') {
        return 'Daliklis turi buti skaicius.';
    }

    if (start % 1 !== 0) {
        return 'Intervalo pradzia turi buti sveikasis skaicius.';
    }
    if (end % 1 !== 0) {
        return 'Intervalo pabaiga turi buti sveikasis skaicius.';
    }
    if (divider % 1 !== 0) {
        return 'Daliklis turi buti sveikasis skaicius.';
    }

    if (start > end) {
        return 'Intervalo pradzia negali buti didesne nei intervalo pabaiga.';
    }
}

//uzduotis interval count
// versija, kai einama per kiekviena skaiciu
function intervalCount(start, end, divider) {
    let count = 0;

    for (let i = start; i <= end; i++) {
        if (i % divider === 0) {
            count++;
        }
    }

    return `Skaiciu intervale tarp ${start} ir ${end}, besidalijanciu be liekanos is ${divider} yra ${count} vienetai.`;
}

console.log(intervalCount(0, 11, 3));
console.log(intervalCount(0, 11, 5));
console.log(intervalCount(0, 11, 7));

// kita versija

//const trueStart = start;

//   for (let i = trueStart; i <= end; i += divider) {
//           count++;
//      }
// galutinis tikslas formule, kurios uzuomina yra zemiau peteikta lygtis/logika
// count = (end - start)/divider;
//{
//    return `Skaiciu intervale tarp ${start} ir ${end}, besidalijanciu be liekanos is ${divider} yra ${count} vienetai.`;
//}


console.log(intervalCount(0, 11, 3));
console.log(intervalCount(0, 11, 5));
console.log(intervalCount(0, 11, 7));

console.log(intervalCount(1, 11, 3));
console.log(intervalCount(1, 11, 5));
console.log(intervalCount(1, 11, 7));

//tikrinamas netinkamas duomenu tipas
console.log(intervalCount('asd', 11, 3));
console.log(intervalCount(0, true, 5));
console.log(intervalCount(0, 11, null));
console.log(intervalCount(undefined, 11, 3));
console.log(intervalCount(0, [], 5));
console.log(intervalCount(0, 11, intervalCount));
console.log(intervalCount(0.1, 11, 3));
console.log(intervalCount(0, NaN, 5));
console.log(intervalCount(0, 11, 7));
// pirmas skaicius negali buti > uz antra
console.log(intervalCount(Infinity, 11, 3));
console.log(intervalCount(100, 11, 5));
console.log(intervalCount(0, 11, -Infinity));

//gauti desimtaine dali, geriau neskaiciuoti, labai sudetinga, nespresti tokiu 
const a = 3.111;
const b = a % 1;
console.log(b);