const person ={
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

const keys = Object.keys(person);
console.log(keys);

for (const key of keys) {
    console.log(person[key]);
}

console.log('\nfor-in');

// for-in dirba tik su objektais
for (const key in person) {
    console.log(person[key]);
}

// 1)
const text = 'Labas';
// 2) 
const counts = {
    'L': 1,
    'a': 2,
    'b': 1,
    's': 1,
};
// 3)
const max = 2;
const letter = 'a'
console.log('---')

//1)
const text2 = 'Labas';
const symbols = {};

symbols['L'] = 1;
symbols['a'] = 1;
symbols['b'] = 1;
symbols['a'] += 1;
symbols['s'] = 1;
console.log(symbols);

const text3 = 'pavasaris';
const symbols3 = {};

for (const s of text3) {
    if (symbols3[s]){
        symbols3[s]++;
    }    else {
            symbols3[s] = 1
        }
    }
console.log(symbols3);

let max1 = 0;
for (const s in symbols3) {
    if (symbols3[s] > max1) {
        max1 = symbols3[s];
    }
}
console.log(max1);

const maxSymbols3 = [];
for ( const s in symbols3) {
    if (symbols3[s] === max1)
        maxSymbols3.push(s);
}
console.log(maxSymbols3);

