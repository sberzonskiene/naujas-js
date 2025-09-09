// Math objektai:

console.log(Math.PI);
console.log(Math.SQRT2);

//Math metodai: abs
console.log(Math.abs(5));
console.log(Math.abs(-5));
console.log('\nabs');

// cbrt
console.log( '\ncbrt');
console.log(Math.cbrt(8));
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));

// ceil
console.log( '\nceil');
console.log(Math.ceil(8));
console.log(Math.ceil(27));
console.log(Math.ceil(64));

// floor
console.log( '\nfloor');
console.log(Math.floor(8));
console.log(Math.floor(8.5))
console.log(Math.floor(-8.5));
console.log(Math.floor(8.921));
console.log(Math.floor(-4.552));

// round
console.log( '\nround');
console.log(Math.round(8));
console.log(Math.round(8.00001));
console.log(Math.round(8.4999999));
console.log(Math.round(-8.50));
console.log(Math.round(8.9));
console.log(Math.round(-8.9999999));

// trunc
console.log( '\ntrunc');
console.log(Math.trunc(8));
console.log(Math.trunc(4.5));
console.log(Math.trunc(4.999999));
console.log(Math.trunc(9));
console.log(Math.trunc(-4.9999999));

// hypot - staciojo trikampio ar kitos figuros istrizaine, kaip Pitagoras
console.log( '\nhypot');
console.log(Math.hypot(3, 4));
console.log(Math.hypot(4, 5));
console.log(Math.hypot(4, 5, 6));

// max - parenka didziausia skaiciu
console.log( '\nmax');
console.log(Math.max(10, 2, 8, 4, 6));
console.log(Math.max(-10, 2, 8, 4, 6));
console.log(Math.max('asfd', 2, 8, 4, 6));

// min - parenka maziausia skaiciu
console.log( '\nmin');
console.log(Math.min(10, 2, 8, 4, 6));
console.log(Math.min(-10, 2, 8, 4, 6));
console.log(Math.min('asfd', 2, 8, 4, 6));

// pow
console.log( '\npow');
console.log(Math.pow(2, 0));
console.log(Math.pow(2, 1));
console.log(Math.pow(2, 2));
console.log(Math.pow(2, 3));
console.log(Math.pow(2, 4));
console.log(Math.pow(2, 5));
console.log(Math.pow(2, 6));
console.log(Math.pow(2, 7));
console.log(Math.pow(2, 8));
console.log(Math.pow(2, 9));
console.log(Math.pow(2, 10));

// sign
console.log( '\nsign');
console.log(Math.sign(8));
console.log(Math.sign(-8));
console.log(Math.sign(0));
console.log(Math.sign(Infinity));
console.log(Math.sign(-Infinity));
console.log(Math.sign(2));
console.log(Math.sign(-3));

// sqrt
console.log( '\nsqrt');
console.log(Math.sqrt(4), 4 ** 0.5);
console.log(Math.sqrt(9), 9 ** 0.5);
console.log(Math.sqrt(81), 9 ** 0.5);
console.log(Math.sqrt(2), 2 ** 0.5);
console.log(Math.sqrt(13), 13 ** 0.5);

// random [0..1)
console.log( '\nrandom');
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log('------------');
// Random skaicius nuo 0 iki 10   [0..9] arba [0..10)

// Random skaicius 3 arba 7
//[0..1) = [0..0.5) + [0.5..1)

let count3 = 0
let count7 = 0

for (let i = 0; i < 10; i++) {
    console.log(Math.random());
}

for (let i = 0; i < 1000000; i++) {
    if (Math.random() < 0.5) {
        count3++;
    } else {
        count7++;
    }
}
console.log(count3, count7);
console.log('------------');
//[13..149]

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    }

console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10)); 

console.log('--------------');

const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < 1000000; i++) {
    const index = randomNumber (0, 9);
    counts[index]++;
}
console.log(counts);

console.log('--------------');

const counts2 = [0, 0];
for (let i = 0; i < 1000000; i++) {
    const index = randomNumber (0, 1);
    counts2[index]++;
}
console.log(counts2);