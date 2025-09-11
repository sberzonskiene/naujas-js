// reduce - supaprastinti, sumazinti kieki
const marks = [10, 2, 8, 4, 6];

let sum = 0;
for (const n of marks) {
    sum += n
}
console.log(sum);

// 10+2+8+4+6 = 30
const sum2 = marks.reduce((total, n) => total + n);
console.log(sum2);

// 10-2-8-4-6 = -10
const minus = marks.reduce((total, n) => total - n);
console.log(minus);

// 0+10+2+8+4+6 = 30
const sum3 = marks.reduce((total, n) => total + n, 0);
console.log(sum3);

// 0-10-2-8-4-6 = -30
const minus2 = marks.reduce((total, n) => total - n, 0);
console.log(minus2);

// 1000+10+2+8+4+6 
const sum4 = marks.reduce((total, n) => total + n, 1000);
console.log(sum4);

// 1000-10-2-8-4-6 
const minus3 = marks.reduce((total, n) => total - n, 1000);
console.log(minus3);

// 1*10*2*8*4*6 
const multi = marks.reduce((total, n) => total * n, 1);
console.log(multi);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

let abr = '';
for (const name of names) {
    abr += name[0] + '.';
}
console.log(abr);

const abr2 = names.reduce((total, name) => total + name[0] + '.', '');
console.log(abr2);
