/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number 
*/

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

console.log('-------');

console.log(isFinite(5), Number.isFinite(5));
console.log(isFinite(-3.14), Number.isFinite(-3.14));
console.log(isFinite(NaN),Number.isFinite(NaN));
console.log(isFinite(Infinity),Number.isFinite(Infinity));
console.log(isFinite([]),Number.isFinite([]));
console.log(isFinite({}),Number.isFinite({}));
console.log(isFinite(true),Number.isFinite(true));
console.log(isFinite(false),Number.isFinite(false));

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
console.log(Number.isInteger({}));

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

console.log('-------');
console.log(parseInt('222labas333'.replace('labas', '')));
console.log(parseInt('222333')); // taip padaro replace

console.log(parseInt('222labas333'.split('labas')));
console.log(parseInt(['222', '333'])); // taip padaro split

console.log('-------');

console.log(parseFloat('44'));
console.log(parseFloat('44.4')); // paima ir sveikuosius, ir desimtainius
console.log(parseFloat('-44'));
console.log(parseFloat('-44.4')); // paima tik viena karta po kablelio
console.log(parseFloat('44,4'));
console.log(parseFloat('-44,4'));
console.log('-------');
console.log(parseFloat('55.66labas'));
console.log(parseFloat('labas55.66'));
console.log(parseFloat('55.66la55.66bas55.66'));
console.log(parseFloat('55.66.77'));
console.log(parseFloat('-5-5'));
console.log(parseFloat('-55'));
console.log(parseFloat('44'));

// Number.EPSILON - paziureti patiems
console.log('-------');

const a = 12.3456789;
console.log(a);
console.log(typeof a); // sukuria 'stringa'
console.log(typeof typeof a);
console.log(typeof 'number');
console.log('string');
console.log('-------');

const b = a.toFixed(4); // paima atitinkama kieki skaiciaus po kablelio sukurti naujam skaiciui
console.log(b);
console.log(typeof b);
console.log('-------');

const c = parseFloat(b); // type of jau supranta kaip skaiciu
console.log(c);
console.log(typeof c);
console.log('-------');

console.log(3.14.toFixed(0));
console.log(3.14.toFixed(1));
console.log(3.14.toFixed(2));
console.log(3.14.toFixed(3));
console.log(3.14.toFixed(4));
