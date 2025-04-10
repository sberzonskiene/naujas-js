// destrukturizavimas - tritaskis - kuriant didesnius objektus, tritaskis - pagamina masyva
const a1 = [1, 11, 111];
const a2 = [2, 22, 222];
const a3 = [3, 11, 333];
const a4 = [4, 11, 444];

const a12 = a1.concat(a2);
console.log(a12);

const b12 = [...a1, ...a2];
console.log(b12);

const b423 = [...a4, ...a2, ...a3];
console.log(b423);

const b333 = [...a3, ...a3, ...a3];
console.log(b333);

//[7, 4, 44,,444, 88]
const c1 = [7, ...a4, 88];
console.log(c1);

const o1 = { name: 'Jonas'};
const o2 = { age: 55};
const o3 = {isMerried: true};

const o12 = { ...o1, ...o2 };
console.log(o12);

const o123 = { ...o1, ...o2, ...o3 };
console.log(o123);

const p1 = {a: 1};
const p2 = {b: 2};
const p3 = {c: 3, a: 7};

const p12 = { ...p1, ...p2 };
console.log(p12);

const p123 = { ...p1, ...p2, ...p3 };
console.log(p123);

const p312 = { ...p3, ...p1, ...p2 };
console.log(p312);

const p4 = { d: 4, ...p3 };
console.log(p4);

const p5 = { d: 4, ...p3, c: 99 };
console.log(p5);

const marks = [10, 2, 8, 4, 6];
const [first, second, ...rest] = marks;

console.log(first);
console.log(second);
console.log(rest);

const names = ['Jonas', 'Rebeka', 'Petras', 'Mirjam'];
const n1 = names[0];
const n2 = names[1];
const n34 = names.slice(2);

console.log(n1);
console.log(n2);
console.log(n34);

const [x, y, ...z]  = names; // tritaskis visada rasomas tik paskutinis, kitaip neveiks
console.log(x);
console.log(y);
console.log(z);

const [...z1] = names;
console.log(z1);

const mix = [1, 'asd', true, [], {}, undefined];
const [m1, m2, m3, ...mRest] = mix;
console.log(m1);
console.log(m2);
console.log(m3);
console.log(mRest);

console.log('-----------');

const person = {
    address: 'Miestas g. 7',
    name: 'Jonas',
    age: 55,
    isMerried: true,
};
const { name, age, ...p } = person;

console.log(name);
console.log(age);
console.log(p);
console.log(p.address);
console.log(p.isMerried);

const students = [
    { name: 'Jonas', age: 55 },
    { name: 'Rebeka', age: 44 },
    { name: 'Petras', age: 33 },
    { name: 'Mirjam', age: 22 },
];

// Studentui, vardu Jonas, yra 55 metai. Prastinamas kodas:

for (let i =0; i < students.length; i++) {
    const student = students[i]
    const name = student.name;
    const age = student.age;
    const result = `Studentui, vardu ${name}, yra ${age} metai.`;
    console.log(result);
}
console.log('-----------');
for (let i =0; i < students.length; i++) {
    const { name, age } = students[i]
    const result = `Studentui, vardu ${name}, yra ${age} metai.`;
    console.log(result);
}
console.log('-----------');
// for - of kaip supaprastinti koda
for ( const student of students) {
    const name = student.name;
    const age = student.age;
    const result = `Studentui, vardu ${name}, yra ${age} metai.`;
    console.log(result);
}
console.log('-----------');
for ( const student of students) {
    const { name, age} = student;
    const result = `Studentui, vardu ${name}, yra ${age} metai.`;
    console.log(result);
}
console.log('-----------');
for ( const { name, age} of students) {
    const result = `Studentui, vardu ${name}, yra ${age} metai.`;
    console.log(result);
}
console.log('-----------');

const numbers = [
    [0],
    [1, 11],
    [2, 22, 222],
    [3, 33, 333, 3333],
    [4],
    [5],
    [6],
];

// Pirmas skaicius yra X ir dar yra Y papildomu skaiciu.

for ( const [first, ...rest] of numbers) {
    //const [first, ...rest] = numberList;
   // const first = numberList[0];
   // const rest = numberList.slice(1);

    const result = `Pirmas skaicius yra ${first} ir dar yra ${rest.length} papildomu skaiciu.`
    console.log(result);
}



