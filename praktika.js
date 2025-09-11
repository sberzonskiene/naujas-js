const word = 'Saulegraza';
const wordSymbolsCount = word.length;

console.log(word);
console.log(wordSymbolsCount);

const text = 'Saulegraza';
const firstSymbol = text [0];
console.log(firstSymbol);


console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
console.log(text[5]);
console.log(text[6]);
console.log(text[7]);
console.log(text[8]);
console.log(text[9]);
console.log(text[10]);

const text1 = 'Saulegraza';
const lastSymbol = text [0];
console.log(lastSymbol);

console.log(text1[10]);
console.log(text1[9]);
console.log(text[8]);
console.log(text[7]);
console.log(text[6]);
console.log(text[5]);
console.log(text[4]);
console.log(text[3]);
console.log(text[2]);
console.log(text[1]);
console.log(text1[0]);


// Zodyje "Saulegraza" pirmoji raide yra "S"
const flower = "Saulegraza";
const flowerSentence = `Zodyje "${flower}" pirmoji raide yra "${flower[0]}"`;
console.log(flowerSentence);

// Zodyje "Saulegraza trecia raide yra "u"
const flower1 = "Saulegraza";
const flowerSentence1 = `Zodyje "${flower1}" trecia raide yra "${flower1[2]}"`;
console.log(flowerSentence1);


//2, 2 -> 2 + 2 = 4
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

//2, 2 - 2 = 0
//7, 7 - 5 = 2
//-7, -7 -15 = -22

function sum1(a1, b1) {
    const result1 = a1 - b1;
    return ` ${a1} - ${b1} = ${result1} `;
}

console.log(sum1(2, 2));
console.log(sum1(7, 5));
console.log(sum1(-7, 15));

//2, 2 * 2 = 4
//7, 7 * 5 = 35
//-7, -7 * 15 = -105

function sum2(a2, b2) {
    const result2 = a2 * b2;
    return ` ${a2} * ${b2} = ${result2} `;
}

console.log(sum2(2 ,2));
console.log(sum2(7 , 5));
console.log(sum2(-7 , 15));

//2, 2 / 2 = 1
//7, 7 / 5 = 1.4
//-7, -7 / 15 = -0.4666

function sum3(a3, b3) {
    const result3 = a3 / b3;
    return ` ${a3} / ${b3} = ${result3} `;
}

console.log(sum3(2, 2));
console.log(sum3(7, 5));
console.log(sum3(-7, 15));

console.clear()

/* Kintamųjų inicijavimas

Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/

const f = 5;
console.log(f);

const g = 70;
console.log(g);

const h = -112;
console.log(h);

const k = 'Pavasaris';
console.log(k);

const l = 'Vasara';
console.log(l);

const m = 'Ruduo';
console.log(m);

const skaiciai = '3, 5, 7, 9, 11';
console.log(skaiciai);

const skaiciai1 = '10, 20, 30, 40, 50';
console.log(skaiciai1);

const skaiciai2 = '2, 6, 8, 3, 11';
console.log(skaiciai2);

const vaisiai = 'bananas, obuolys, mango, apelsinas, braske';
console.log(vaisiai);

const darzoves = 'morka, svogunas, bulve, kopustas, cesnakas';
console.log(darzoves);

const geles = 'roze, tulpe, pakalnute, bijunas, orchideja';
console.log(geles);

/* Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console
Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

const suma = 3 + 5 +7 + 9 + 11;
console.log(suma);

const suma1 = 10 + 20 + 30 + 40 + 50;
console.log(suma1);

const suma2 = 2 + 6 + 8 + 3 + 11;
console.log(suma2);

const vaisiai1 = " bananas " + " obuolys " + " mango " + " apelsinas " + " braske ";
console.log(vaisiai1);

const darzoves1 = " morka " + " svogunas " + " bulve " + " kopustas " +  " cesnakas ";
console.log(darzoves1);

const geles1 = " roze " + " tulpe " + " pakalnute " + " bijunas " + " orchideja " ;
console.log(geles1);

const suma3 = 1 - 2 + 3 - 4 + 5;
console.log(suma3);

//// bananas, obuolys, mango, apelsinas, braske.
 
const fruit = ['bananas' , ' obuolys ' , ' mango ' , ' apelsinas ' , ' braske. '];
console.log(fruit) 

const fruit1 = ` ${fruit[0]}, ${fruit[1]}, ${fruit[2]}, ${fruit[3]}, ${fruit[4]} `;
console.log(fruit1)

const fruit2 = ` ${fruit[4]}, ${fruit[3]}, ${fruit[2]}, ${fruit[1]}, ${fruit[0]} `;
console.log(fruit2)


/*Kintamųjų palyginimas
Priklausomai nuo sąlygos, susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau), tai į console išvesti žodį “Pomidoras”,
 o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

Tarpusavyje palyginti skaičiaus tipo kintamuosius:
kuris didesnis +
kuris mažesnis +
ar jie lygūs   +
ar jie nelygūs +
kuris didesnis arba lygus +
kuris mažesnis arba lygus +
Išvesti teksto tipo kintamųjų ilgius +
Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
kuris didesnis +
kuris mažesnis +
ar jie lygūs  +
ar jie nelygūs +
kuris didesnis arba lygus +
kuris mažesnis arba lygus +
Išvesti sąrašo tipo kintamųjų ilgius 
Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
kuris didesnis +
kuris mažesnis +
ar jie lygūs + 
ar jie nelygūs +
kuris didesnis arba lygus + 
kuris mažesnis arba lygus +
*/


if (3 > 7) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}


if (3 < 7) {
  console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (3 === 7) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (3 !== 7) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (3 >= 7) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (3 <= 7) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

const word1 = 'trys';
const wordSymbolsCount1 = word1.length;

console.log(word1);
console.log(wordSymbolsCount1);

const word2 = 'septyni';
const wordSymbolsCount2 = word2.length;

console.log(word2);
console.log(wordSymbolsCount2);

// 4 ir 7

if (4 > 7) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta')
};

if (4 < 7) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (4 === 7) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (4 !== 7) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (4 >= 7) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (4 <= 7) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

//  skaicius trys ir skaicius septyni

const listSize = 'Skaicius trys'.length;
console.log(listSize);

const listSize1 = 'Skaicius septyni'.length;
console.log(listSize1);

// 13 ir 16 

 if ( 13 > 16) {
    console.log('Pomidoras');
 } else {
    console.log('Bandykite kita karta');
 }

 if ( 13 < 16) {
    console.log('Pomidoras');
 } else {
    console.log('Bandykite kita karta');
 }
 
 if ( 13 === 16) {
    console.log('Pomidoras');
 } else {
    console.log('Bandykite kita karta');
 }

 if ( 13 !== 16) {
    console.log('Pomidoras');
 } else {
    console.log('Bandykite kita karta');
 }

 if ( 13 >= 16) {
    console.log('Pomidoras');
 } else {
    console.log('Bandykite kita karta');
 }

 if ( 13 <= 16) {
    console.log('Pomidoras');
 } else {
    console.log('Bandykite kita karta');
 }

