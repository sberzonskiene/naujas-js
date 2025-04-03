/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number 
*/

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

console.log(isFinite(5), Number.isFinite(5));
console.log(isFinite(-3.14), Number.isFinite(-3.14));
console.log(isFinite(NaN),Number.isFinite(NaN));
console.log(isFinite(Infinity),Number.isFinite(Infinity));

console.log('-------');

console.log(Number.isInteger(5));
console.log(Number.isInteger(-5));
console.log(Number.isInteger(3.14));
console.log(Number.isInteger(-3.14));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger('asdf'));
console.log(Number.isInteger(true));
console.log(Number.isInteger([]));

console.log('-------');

console.log(Number.isNaN(5));
console.log(Number.isNaN(3.14));
console.log(Number.isNaN(Infinity));
console.log(Number.isNaN(NaN));

console.log(Number.isNaN('asdf'), isNaN('asdf'));

console.log('-------');

const userInput = '22'; // naudoja skaicius, kaip 'stringa' - tekstas
const date = userInput + 5;
console.log(date);

const userInput1 = '22'; // daugyboje '22' naudoja, kaip skaiciu
const date1 = userInput1 * 5;
console.log(date1);

const userInput2 = '22'; 
const userNamber = parseInt(userInput);
const date2 = userNamber + 5;
console.log(date2);

console.log(parseInt('65'));
console.log(parseInt('65.314'));  // apima tik sveikuosius
console.log(parseInt('-65'));
console.log(parseInt('-65.314'));

console.log(parseInt('labas')); // visada gauna atsakyma skaiciaus tipo
console.log(parseInt('labas111'));
console.log(parseInt('222labas'));  // skaito skaicius tik pradzioje
console.log(parseInt('222labas3333'));

console.log(parseInt('222labas3333'));

console.log('-------');

console.log(parseFloat('44'));
console.log(parseFloat('44.4')); // paima ir sveikuosius, ir desimtainius
console.log(parseFloat('-44'));
console.log(parseFloat('-44.4')); // paima tik viena karta po kablelio
console.log(parseFloat('44,4'));
console.log(parseFloat('-44,4'));

console.log(parseFloat('55.66labas'));
console.log(parseFloat('labas55.66'));
console.log(parseFloat('55.66la55.66bas55.66'));
console.log(parseFloat('55.66.77'));
console.log(parseFloat('-5-5'));
console.log(parseFloat('-55'));

console.log(parseFloat('44'));
console.log(parseFloat('44'));

// Number.EPSILON - paziureti patiems