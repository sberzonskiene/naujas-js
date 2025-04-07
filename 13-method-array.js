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
