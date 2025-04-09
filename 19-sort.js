// sort - rikiavimas: nuo a iki z ; nuo 0 iki 9 - zodyno principas
// su tekstais
const texts = ['labas', 'rytas', 'Lietuva', 'duona', 'aviza', 'Zirnis', 'Arbata'];
console.log(texts);

texts.sort();
console.log(texts);

const pseudo = ['d', 'b', 'ca', 'bf', 'ba', 'cc', 'db', 'baa', 'bac'];
pseudo.sort();
console.log(pseudo);

// su skaiciais
const numbers = [2, 8, 4, 6];
console.log(numbers);

const numbers1 = [2, 8, 4, 6, 10, 23, 1, 12].sort();
console.log(numbers1);

const numbers2 = [2, 8, 4, 6, 10, 23, 1, 12]
.sort((a, b) => a - b);   
console.log(numbers2);

const numbers3 = [2, 8, 4, 6, 10, 23, 1, 12]
numbers3.sort((a, b) => b - a);
console.log(numbers3);

const people = [
    { name:'Jonas', age: 99 },
    { name:'Ona', age: 55 },
    { name:'Petras', age: 88 },
    { name:'Maryte', age: 77 },
];

people.sort((a, b) => a.age - b. age);
console.log(people);

people.sort((a, b) => a.name.length - b.name.length);
console.log(people);

people.sort((a, b) => a.name > b.name ? 1: -1); // vardus paraso pagal abeceles tvarka
console.log(people);