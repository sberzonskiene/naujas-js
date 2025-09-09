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
console.log('\nat');
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
console.log('\nendsWith');
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
console.log('Kukuruzas'.indexOf('u', 4));

console.log('-----')

console.log('Kulverstukas'.indexOf('u'));
console.log('Kulverstukas'.indexOf('u', 2));
console.log('Kulverstukas'.indexOf('K'));
console.log('Kulverstukas'.indexOf('k', 1));

const k = 'Kulverstukas'
console.log(k.indexOf('s'));
console.log(k.indexOf('s', k.indexOf('s'), +1));

//console.clear();

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

const cloud = 'debeselis'.replace('i','*');
console.log(cloud);

const cloud1 = 'debeselis'.replace('e','***');
console.log(cloud1);

const cloud2 = 'debeselis'.replace('ebe','*'.repeat(3));
console.log(cloud2);

// replaceAll
console.log('\nreplaceAll');

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

// slice
console.log('\nslice');

console.log('pomidoras'.slice());
console.log('pomidoras'.slice(0));
console.log('pomidoras'.slice(1));
console.log('pomidoras'.slice(4));
console.log('---------');
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

// trim
console.log('\ntrim');

console.log(`"${'pomidoras'.trim()}"`);
console.log(`"${      'pomidoras'.trim()}"`);
console.log(`"${'pomidoras'     .trim()}"`);
console.log(`"${'    pomidoras    '.trim()}"`);
console.log(`"${'   labas   rytas   '.trim()}"`); //pasalina tarpus tik pradzioje ir gale.
console.log(`"${'   labas   rytas   '.trimEnd()}"`);
console.log(`"${'   labas   rytas   '.trimStart()}"`);

// split - dalina i atskiras dalis
console.log('\nsplit');

const t1 = 'zodis';
const t1Parts = t1.split();
const t1Parts2 = t1.split('o');
const t1Parts3 = t1.split('d');

console.log(t1Parts);
console.log(t1Parts2);
console.log(t1Parts3);

const t2 = 'kultivatorius';
const t2Parts = t2.split('t');
console.log(t2Parts);

const t3 = 'Labas rytas Lietuva';
const t3Parts = t3.split(' ');
console.log(t3Parts);

console.log('ana'.split('a'));
console.log('vasara'.split(''));

const t4 = 'Labas. Ka veiki. Kaip gyveni.'
const sentenceCount = t4.split('.').length -1; 
console.log(sentenceCount);
console.log(t4);

// charCodeAt
console.log('\ncharCodeAt');

console.log('a'.charCodeAt(0));
console.log('A'.charCodeAt(0));

if ( 'A' > 'a') {
    console.log('daugiau');
} else {
    console.log('maziau');
}

if ( 'labas' > 'iki') {
    console.log('daugiau');
} else {
    console.log('maziau');
}

const s1 = String.fromCharCode(65);
console.log(s1);
