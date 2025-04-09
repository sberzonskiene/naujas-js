/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

const list = [];
console.log(list);

list.push(10);     // tipinis variantas
console.log(list);

list.push(2);
console.log(list);

list.push(8);
console.log(list);

list.push(15, 7);
console.log(list);

list.push(1, 2, 3, 4, 5);
console.log(list);

const numbers = [10, 2, 8, 4, 6];
const doubleNumbers = [];

for ( let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log( number, number * 2);
}

for ( let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    doubleNumbers.push(number * 2);
}
console.log(doubleNumbers);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const nameSize = [];
const nameFirstLetters = [];
const upperCaseNames = [];

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log('---', name, name.length);

    nameSize.push(name.length);
    nameFirstLetters.push(name[0]);
    upperCaseNames.push(name.toUpperCase());
}

console.log(nameSize);
console.log(nameFirstLetters);
console.log(upperCaseNames);

const n1 = [1, 11, 111];
const n2 = [2, 22, 222, 2222];
const n12 = [];
// const n12 = [ 1, 11, 111, 2, 22, 222, 2222];

for (let i = 0; i < n1.length; i++) {
    n12.push(n1[i]);
}

for (let i = 0; i < n1.length; i++) {
    n12.push(n2[i]);
}
console.log(n12);

const numbers2 = [ 10, 2, 8, 4, 6];
console.log(numbers2);

numbers2.push(9);
console.log(numbers2);

numbers2.pop(); // pasalina is galo
numbers2.pop();
console.log(numbers2);

const g1 = numbers2.pop(); // ne tik pasalina, bet ir grazina ka pasalino.
const g2 = numbers2.pop();
console.log(numbers2, g1, g2);

numbers2.unshift(1); // padeda i prieki
numbers2.unshift(2);
numbers2.unshift(3);
console.log(numbers2);

numbers2.shift();      // pasalina pirma elementa ir ji gali grazinti
console.log(numbers2);

const g3 = numbers2.shift(); 
const g4 = numbers2.shift ();
console.log(numbers2, g3, g4);

console.log('-----------');

//0              0   1   2   3   4
const magic = [ 11, 22, 33, 44, 55];
console.log(magic.includes(5));
console.log(magic.includes(55));

console.log(magic.indexOf(5));
console.log(magic.indexOf(55));

const text = [ 'morka', 'bulve', 'kopustas', 'cesnakas'];

//Rekalingi produktai: a, b, c, d.
const products = `Reikalingi produktai: ${ text.join (', ')}.`; 
console.log(products);

console.log('-----------');

const texts = [ 'morka', 'bulve', 'kopustas', 'cesnakas'];
console.log(texts);
texts.reverse();
console.log(texts);

const c1 = [1, 11];
const c2 = [2, 22];
const c3 = [3, 33];
const c4 = [4, 44];

const c12 = c1.concat(c2);
console.log(c12);

const c34 = c3.concat(c4);
console.log(c34);

const c123 = c1.concat(c2).concat(c3);
console.log(c123);

const c111 = c1.concat(c1, c1);
console.log(c111);

const h = [11, 22, 33, 44, 55];
console.log(h);

h.splice(0);
console.log(h);

h.splice(1);
console.log(h);

h.splice(0, 1);
console.log(h);

h.splice(1, 2);
console.log(h);

console.clear();

// MAP
const k = [10, 2, 8,4, 6];
const k2 = [];

for (const n of k) {
    k2.push(n * 2);
}
console.log(k2);

function triple(n) {
    return n * 3;
}

const k3 = k.map(triple);
console.log(k3);

const quadro = n => n * 4;
const k4 = k.map(quadro);
console.log(k4);

const k5 = k.map(n => n * 5);
console.log(k5);

const k6 = k.map(n => n);
console.log(k6);

const k7 = k.map(n => n + 1);
console.log(k7);

// MAP su tekstais - object
const dict = ['bulve', 'morka', 'svogunas'];
const dict2 = dict.map(w => w[0])
console.log(dict2);

const dict3 = dict.map(w => w.length)
console.log(dict3);


const people = [
    {name: 'Jonas', age: 99 },
    {name: 'Maryte', age: 88},
    {name: 'Petras', age: 77},
    {name: 'Ona', age: 55},
];

const people100 = people.map(person =>`${person.name} liko ${100 - person.age} metai.`);
console.log(people100);

const peopleNames = people.map(person => person.name);
console.log(peopleNames);

const peopleAges = people.map(person => person.age);
console.log(peopleAges);

const peopleMarried = people.map(person => {
    person.isMarried = true;
    return person;
});
console.log(peopleMarried);

// FILTER
const p = [10, 2, 8, 4, 6];
const p5 = [];

for (const n of p) {
    if (n > 5) {
        p5.push(n);
    }
}
console.log(p5);

const p6 = p.filter(n => n > 6);
console.log(p6);

const p7 = p.filter(n => n <= 7);
console.log(p7);

const p8 = p.filter(n => n > 2 && n < 8);
console.log(p8);

const texts5 = ['labas', '', 'rytas', '', 'Lietuva'];
const texts5Updated = texts5.filter(t => t.length > 0);
console.log(texts5Updated);

const texts5Updated2 = texts5.filter(t => t); 
console.log(texts5Updated2);

// fill
const default5 = [0, 0, 0, 0, 0];   // visos reiksmes yra VIENODOS
const default7 = Array(7).fill(99);
console.log(default7);

const zeros = Array(10)
const zeros2 = Array(10).fill(0);
console.log(zeros);
console.log(zeros2);

const pozitives = Array(7).fill(true);
console.log(pozitives);

const emtySpace = Array(8).fill('');
console.log(emtySpace);

const tiesa5 = Array(5).fill('tiesa');
console.log(tiesa5);

const demo = [10, 2, 4, 8, 6];
console.log(demo);
demo.fill(777)
console.log(demo);

// every - kiekvienas
const trees = ['uosis', 'egle', 'azuolas', 'tuopa'];
const allTreesValid = trees.every(s => s.length >0);
console.log(allTreesValid);

const allTreesValid5 = trees.every(s => s.length === 5);
console.log(allTreesValid5);

// some - kai kurie
const someTreesValid = trees.some(s => s.length >0);
console.log(someTreesValid);

const someTreesValid5 = trees.some(s => s.length === 5);
console.log(someTreesValid5);

const someTreesValid10 = trees.some(s => s.length === 10);
console.log(someTreesValid10);



