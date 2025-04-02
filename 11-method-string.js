/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

console.log('Labas'[0]);
console.log('Labas'[1]);
console.log('Labas'[2]);
console.log('Labas'[3]);
console.log('Labas'[4]);

const text = 'Pomidoras';
console.log(text[0]);
console.log(text[text.length -1]);

// at
console.log('--', text.at(0));
console.log('--', text.at(1));
console.log('--', text.at(2));
console.log('--', text.at(-1));
console.log('--', text.at(-2));
console.log('--', text.at(-3));

// includes
console.log('\nincludes');
console.log('Vasara'.includes('V'));
console.log('Vasara'.includes('v'));
console.log('Vasara'.includes('a'));
console.log('Vasara'.includes('A'));
console.log('Vasara'.includes('aaa'));
console.log('Vasara'.includes('sara'));

// startWith
console.log('\nstartWith');
console.log('Pomidoras'.startsWith('a'));
console.log('Pomidoras'.startsWith('p'));
console.log('Pomidoras'.startsWith('P'));
console.log('Pomidoras'.startsWith('Pomi'));
console.log('Pomidoras'.startsWith('doras'));
console.log('Pomidoras'.startsWith('Pomidoras'));

// endstWith
console.log('\nstartWith');
console.log('Pomidoras'.endsWith('s'));
console.log('Pomidoras'.endsWith('as'));
console.log('Pomidoras'.endsWith('P'));
console.log('Pomidoras'.endsWith('Pomi'));
console.log('Pomidoras'.endsWith('doras'));
console.log('Pomidoras'.endsWith('Pomidoras'));

// indexOf
console.log('\nindexOf');
//           012345678
console.log('Pomidoras'.indexOf('a'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('m'));
console.log('Pomidoras'.indexOf('omi'));
console.log('Pomidoras'.indexOf('p'));
console.log('Pomidoras'.indexOf('x'));
console.log('Pomidoras'.indexOf('o', 0));
console.log('Pomidoras'.indexOf('o', 1));
console.log('Pomidoras'.indexOf('o', 2));

console.log('-----')

console.log('Kulverstukas'.indexOf('u'));
console.log('Kulverstukas'.indexOf('u', 2));

const k = 'Kulverstukas'
console.log(k.indexOf('s'));
console.log(k.indexOf('s', k.indexOf('s'), +1));

console.clear();

// repeat
console.log('\nrepeat');
console.log('a');

const symbol = 'm';
const megaSymbol = symbol.repeat(10);
console.log(symbol);
console.log(megaSymbol);

const symbol1 = 'labas';
const megaSymbol1 = symbol1.repeat(5);
console.log(symbol1);
console.log(megaSymbol1);

function stringRepeat(text, count) {
   let result = '';

    for (let i = 0; i < count; i++) {
        result += text
    }
    return result;
}
console.log(stringRepeat('rikiki',3));

// replace
console.log('\nreplace');

console.log('vasara'.replace('a', '-'));

const summer = 'vasara'.replace('a', '-');
console.log(summer);

// chain - grandine
const summer1 = 'vasara'.replace('a', '-').replace('a', '-');
console.log(summer1);

const summer2 = 'vasara'.replace('a', '-').replace('a', '-'). replace('a', '-');
console.log(summer2);

const cloud = 'debeselis'.replace('u','***');
console.log(cloud);

const cloud1 = 'debeselis'.replace('e','***');
console.log(cloud1);

const cloud2 = 'debeselis'.replace('ebe','*'.repeat(3));
console.log(cloud2);

// replaceAll
console.log('\nreplace');

console.log('vasara');
console.log('vasara'.replaceAll('a', '-'));

console.log('ananasas'.replace('a', ''));
console.log('ananasas'.replaceAll('a', ''));
console.log('ananasas'.replaceAll('na', ''));

//Labas rytas, Lietuva!
const hi = 'Labas rytas, Lietuva!';
const hiNormalSize = hi.replaceAll('','').length;

console.log(hiNormalSize);

// toUperrCase
console.log('\ntoUperrCase');
console.log('labas'.toUpperCase());

// toLowerCase
console.log('\ntoLowerCase');
console.log('LABAS'.toLowerCase());

// SLICE
console.log('\nslice');

console.log('pomidoras'.slice());
console.log('pomidoras'.slice(0));
console.log('pomidoras'.slice(1));
console.log('pomidoras'.slice(4));

console.log('pomidoras'.slice(0, 1));
console.log('pomidoras'.slice(0, 2));
console.log('pomidoras'.slice(0, 4));
console.log('pomidoras'.slice(2, 4));
console.log('pomidoras'.slice(1, 3));
console.log('pomidoras'.slice(5, 2)); //taip neveikia, negali didesnis pries mazesni
console.log('pomidoras'.slice(0, -1));
console.log('pomidoras'.slice(3, -3));
console.log('pomidoras'.slice(-4));
console.log('pomidoras'.slice(-6, -2));

