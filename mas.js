const galas = [1, 3, 5, 7];
galas.push(9);
console.log(galas);

const pradzia = [1, 3, 5, 7];
pradzia.unshift(9);
console.log(pradzia);

const paskutinis = ['a', 'b', 'c', 'd'];
paskutinis.pop();
console.log(paskutinis);

const pirmas = ['a', 'b', 'c', 'd'];
pirmas.shift();
console.log(pirmas);

const a = [10, 20, 30, 50];
a.splice(3);
console.log(a);

const b = [10, 20, 30, 50];
b.splice(3, 0, 40);
console.log(b);

const c = ['a', 'b', 'c', 'd', 'u'];
c.splice(2, 2, 5);
console.log(c);

const diena = ['kokia', 'grazi', 'diena'];
diena.splice(1, 0, 'silta');
console.log(diena);


const word = ['kokia', 'grazi', 'sauleta', 'diena'];
word.sort();
console.log(word);

const num = [4, 11, 3, 18, 50];
num.sort((a, z) => a- z);
console.log(num);

const num1 = [4, 11, 3, 18, 50];
num1.sort((a, z) => z- a);
console.log(num1);

const re = [ 15, 8, 6, 11, 2];
re.reverse();
console.log(re);

const rv = ['kokia', 'grazi', 'ir', 'sauleta', 'diena'];
rv.reverse();
console.log(rv);

const ff = [ 15, 8, 11, 2];
ff.fill(4, 2, 3);
console.log(ff);

console.log('-------------');

let foo;
console.log(foo);
console.log(typeof NaN);

let agggg = [1, 2, 3];
console.log(agggg.length);

console.log(typeof []);

console.log("----------");

for (let i = 0;  i < 5; i++ ) {
    if (i == '2') 
        {continue}
     console.log(i); 
}

console.log("----------");

for (i = 0;  i < 5; i++ ) {
    if (i === 2)
        {break};
    console.log(i)
}