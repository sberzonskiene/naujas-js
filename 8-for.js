/* 
FOR (loop) - ciklas
*/

for (let i = 0; i < 5; i++) {
    console.log('a) number:', i);
}

for (let i = -5; i < 5; i++) {
    console.log('a) number:', i);
}


console.log('-----');

console.log('number:', 0);
console.log('number:', 1);
console.log('number:', 2);
console.log('number:', 3);
console.log('number:', 4);

for (let i = 2; i < 5; i++) {
    console.log('a) number:', i);
}
console.log('-----');

for (let i = 1; i <= 5; i++) {
    console.log('b)number:', i);
}
console.log('-----');

for (let i = 2; i <= 7; i++) {
    console.log('b)number:', i);
}
console.log('-----');

for (let i = 5; i >= 0; i--) {
    console.log('c)number:', i);

}

console.log('-----');

let k = 5;
k = k + 1;
k += 1;
k++;
++k;

// 0, 1, 2, 3, 4, ....
//0, 2, 4, 6, 8, .....

for (let i=0; i<11; i+=2) {
    console.log('kas du:', i);
}
console.log('-----');

for (let k= 0; k < 1; k+= 0.1) {
    console.log(k);
}
//nenaudoti skaiciu pvz: 0.1; 0.2 ir t.t.

for (let k= 0; k < 10; k++) {
    console.log(k /10);
}

console.log('-----');

console.log((10 + 20) / 100);
console.log((399 + 20) / 100);

console.log('------');

const n = 7;

console.log(`${n} * 1 = ${n*1}`);
console.log(`${n} * 2 = ${n*2}`);
console.log(`${n} * 3 = ${n*3}`);



const marks = [10, 2, 8, 4, 6];

//rankinis budas:
let sum = 0;
sum += marks[0];
sum += marks[1];
sum += marks[2];
sum += marks[3];
sum += marks[4];

console.log(sum);

// sarasas ciklo budu
let sum2 = 0;

for (let i = 0; i < 5; i++) {
    console.log('index', i, '-->', marks[i]);
    sum2 += marks[i];
}

console.log(sum2);

console.log('------');

// Studento vardas yra VARDAS (daromas ciklas)
const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

for (let i=0; i < names.length; i++) {
    const s = `Studento vardas yra ${names[i]}.`;
    console.log(s);
}

console.log('------');

// Vardas "VARDAS" yra sudarytas is N raidziu.

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const s = `Vardas "${name}" yra sudarytas is ${name.length} raidziu.`;
    console.log(s);
}
console.log('------');

// Zodis yra ZODIS
const zodziai = [ 'Mergaite', 'Berniukas'];

for (let z = 0; z < zodziai.length; z++){
    const v = `Zodis yra ${zodziai[z]}.`;
    console.log(v);
}

// Zodis "ZODIS" yra sudarytas is N raidziu.

for (let z = 0; z < zodziai.length; z++) {
    const zodis = zodziai[z];
    const v = `Zodis "${zodis}" yra sudarytas is ${zodis.length} raidziu.`;
    console.log(v);
}


