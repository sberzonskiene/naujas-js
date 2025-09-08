/*
ARRAY - sarasas, Arejus, matrica, masyvas, list'as, rinkinys
*/

const emty = [];
console.log(emty);

const luckyNumbers = [7, 777, 13, 666, 8, 2];
console.log(luckyNumbers);

const students = [ 'Jonas', 'Maryte', 'Ona'];
console.log(students);

const firstNumber = luckyNumbers[0];
console.log(luckyNumbers);

console.log(luckyNumbers[0]);
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);
console.log(luckyNumbers[3]);
console.log(luckyNumbers[4]);
console.log(luckyNumbers[5]);
console.log(luckyNumbers[6]);

const number = [10, 2, 8, 4, 6];
const totalSum1 = number[0] + number[1] + number[4] + number [3] + number [2];
console.log(totalSum1);

let totalSum3 = 0;
totalSum3 = totalSum3 + number[0];
console.log(totalSum3);

let totalSum2 = 0;
totalSum2 = totalSum2 + number[0];
totalSum2 = totalSum2 + number[1];
totalSum2 = totalSum2 + number[2];
totalSum2 = totalSum2 + number[3];
totalSum2 = totalSum2 + number[4];
console.log(totalSum2);

const dictionary = ['pomidoras', 'agurakas', 'bulve', 'kefyras', 'druska', 'svogunu laiskai'];

// Patiekalui reikes: a, b, c, d.
const sentence1 = 'Patiekalui reikes: ' + dictionary[0] + ', ' + dictionary[1] + ', ' + dictionary[2] + ', ' +  dictionary[3] + ', '  
+ dictionary[4] + ', ' + dictionary[5] + '.';
console.log (sentence1);

let sentence2 = 'Patiekalui reikes: ';
sentence2 = sentence2 += dictionary[0] + ', ';
sentence2 = sentence2 += dictionary[1] + ', ';
sentence2 = sentence2 += dictionary[2] + ', '; 
sentence2 = sentence2 += dictionary[3] + ', ';
sentence2 = sentence2 += dictionary[4] + ',';
sentence2 = sentence2 += dictionary[5] + ', ';
console.log(sentence2);

let index = 0;
let sentence3 = 'Patiekalui reikes: ';
sentence3 = dictionary[index] + ', ';
console.log(sentence3);

//Dokumentacija

index += 1;

let k = 0;
k = k + 1;
k += 1;
k++;
++k;

let i = 0;
let sentence4 = 'Patiekalui reikes: ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + '.';
console.log(sentence4);

let j = -1;
let sentence5 = '++ Patiekalui reikes: ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + '.';
console.log(sentence5);