function pavadinimas () {
    // logika
}

function penki () {
  return 5
};

const c =  penki ();
console.log(c);

function hi() {
  return 'Labas!';
}

const d = hi ();
console.log(d);

// Jonas -> Labas, Jonai!
// Maryte -> Labas, Maryte!

function hiPerson(name) {
  //return 'Labas,' + name + '!';
  return `Labas, ${name}!`;
}

console.log(hiPerson('Jonas'));
console.log(hiPerson('Maryte'));
console.log(hiPerson());


// 2+2 = 4
// 7+5 = 12

function sum(number1, number2) {
  return number1 + number2;
}

const e = sum (2, 2);
console.log(e);

const f = sum (7, 5);
console.log(f);

const g = sum (-7, 5);
console.log(g);

// 100-> 121 Eur
// 200-> 242 Eur
// 73-> 88.33 Eur

function priceWithVAT(price) {
  const updateprice = price * 1.21;

  return updateprice * 1.21 + ' Eur ';
}

const p1 = priceWithVAT(100);
console.log(p1);

const p2 = priceWithVAT(200);
console.log(p2);

const p3 = priceWithVAT(73);
console.log(p3);


// Jonas -> Zodis "Jonas" yra sudarytas is 5 raidziu.
// Maryte -> Zodis "Maryte" yra sudarytas is 6 raidziu.

function nameLength(name) {
  const size = name.length;
  return `Zodis "${name}" yra sudarytas ${size} raidziu.`;
 kitaip

  return `Gautas skaicius: ${n}.`
}

const nl1 = nameLength('Jonas');
console.log(nl1);

const nl2 = nameLength('Maryte');
console.log(nl2);


// 5 -> Gautas skaicius: 5.
// -13 -> Gautas skaicius: -13.

function gotNumber(n) {
  return 'Gautas skaicius:' + n + '.' ;
}

const gn1 = gotNumber(5);
const gn2 = gotNumber(-13);

console.log(gn1);
console.log(gn2);


//2, 2 -> 2 +2 = 4
//7, 5 -> 7 + 5 = 12
// -7, 5- > -7 + 15 = 8

function sum(a, b) {
  const result = a + b;
  return ` ${a} + ${b} = ${result}`;
}

console.log(sum(2, 2));
console.log(sum(7, 5));
console.log(sum(-7, 15));

// ND: - perdaryti analogiskai su -, * ir / operacijomis .

// 9 + 6 =15
// -3 + 8 = 5

function sum1(c, d) {
  const result1 = c + d;
  return ` ${c} + ${d} = ${result1}`;
}

console.log(sum1(9, 6));
console.log(sum1(-3, 8));

