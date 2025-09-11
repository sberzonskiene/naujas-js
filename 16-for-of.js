const marks = [10, 2, 8, 4, 6];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    sum += mark;
}

console.log(sum);

let sum2 = 0;

for (const mark of marks) {
    sum2 += mark;
}
console.log(sum2);

const names = [ 'Jonas', 'Maryte', 'Petras', 'Ona'];

for (const name of names) {
    console.log(name);
}

const names1 = ['Tiesa', 'Sviesa', 'Geris'];
const namesSizes = [];
for (const name1 of names1) 
    {
    namesSizes.push(name1.length);
}
console.log(namesSizes);



