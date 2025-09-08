/*
IF - palyginimo savybe

Palyginimo operatoriai:
- visi: >, <, >=, <=, ==, ===, !=, !==
-naudotini: >, <, >=, <=, ===, !==
- nenaudotini: ==, !=

Kodo sablonai:
if () {}
if () {} else {}
if () {} else if ()
if () {} else if () else {}
if () {} ... else if () ...
if () {} ... else if () ... else {}
*/

console.log('START');

if (4 > 2) {
    console.log('taip, 4 yra daugiau uz 2');

}

console.log('END');

console.log('START');

if (4 > 2) {
    console.log('--- taip');
} else {
    console.log('----ne');
    }

console.log('END');

const temp = -2;

if (temp >= 18) {
    console.log('Silta 🌞');
} else {
    console.log('Salta 🥶');
}

const temp3 = 20;

if (temp3 >= 18) {
    console.log('Silta 🌞');
} else {
    console.log('Salta 🥶');
}

// jei zemiau 0 -> salta
// jei zemiau 10 -> meh
// jei zemiau 22 -> silta
// jei daugiau -> karsta

const temp2 = 5;

if (temp2 < 0) {
    console.log('Salta 🥶');
} else if (temp2 < 10) {
    console.log('Meh 👀');
} else if (temp2 < 22) {
    console.log('Silta 🌞');
} else {
        console.log('Karsta 😎');
}


if ( 4 !== 4 )  {
    console.l('tenkina');
}  else {
    console.log('NE-tenkina');
}

if ( 4 === '4' )  {
    console.log('tenkina');
}  else {
    console.log('NE-tenkina');
}

if ( 4 === 4 )  {
    console.log('tenkina');
}  else {
    console.log('NE-tenkina');
}
