const n1 = 7;
const n2 = 5;

// 1) function declaration
function sum(a, b) {
    return a + b;
}

console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// 2) kintamajam priskirta anonimine funkcija
const minus = function (a, b) {       
    return a - b;
}

console.log(`${n1} - ${n2} = ${minus(n1, n2)}`);

// 3) arrow function
const multi = (a, b) => {    // rodykline f-ja
    return a * b
}
console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);

// 3a) analogiska rodykline f-ja, arrow function
// jei logikos bloke yra TIK 1 salyga
// tai galima nerasyti {return}
const div = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${div(n1, n2)}`);

// 3b) arrow function
// jeigu parametru bloke yra TIk 1 parametras
// tai galima nerasyti ()
const sqr = a => a**2
console.log(`${n1}**2 = ${sqr(n1)}`);
console.log(`${n2}**2 = ${sqr(n2)}`);

// Funkcija grazina vardo pirma raide
const firstLetter = name => name[0]
console.log(firstLetter('Jonas'));
console.log(firstLetter('Maryte'));

// Funkcija grazina pataisyta varda
const correctName = name => name[0].toUpperCase() + name.slice(1).toLowerCase();
console.log(correctName('jonas'));
console.log(correctName('Maryte'));
console.log(correctName('peTRas'));
console.log(correctName('ONA'));

//Funkcija grazina atbulini teksta
const reverseString = text => text.split('').reverse().join('');
console.log(reverseString('labas'));
console.log(reverseString('sedek'));

