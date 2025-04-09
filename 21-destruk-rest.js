// destrukturizavimas - tritaskis - kuriant didesnius objektus
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

