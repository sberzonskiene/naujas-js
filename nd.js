

let a = 5, b = 3

let k

k = a;
a = b;
b = k;
console.log (a, b);



 a = '5'
 b = '5'
 c = '5'

console.log(a+b+c);

/* 1 užduotis - mokytojo suvestinė:
Susikurkite bent 6 sąrašo (array) tipo kintamuosius, kurių pirmas narys yra mokinio vardas, 
o toliau yra 5 skaičiaus tipo mokinio pažymiai
Sukurkite funkciją, kuri padaro šiuos veiksmus:
Į console išveda mokinio vardą
Į console išveda mokinio pažymių vidurkį ir praneša ar mokinys išlaikė ar neišlaikė kurso
Jei mokinys neišlaiko kurso, parašykite ar mokinys, gavęs vieną gerą įvertį, galėtų pasitaisyti savo vidurkį.
*/

const Mokinys1 = ['Tadas', 8, 9, 10, 4, 7];
const Mokinys2 = ['Rima', 8, 3, 5, 4, 7];
const Mokinys3 = ['Gabija', 9, 3, 10, 5, 2];
const Mokinys4 = ['Ona', 8, 6, 7, 5, 9];
const Mokinys5 = ['Jonas', 2, 9, 3, 5, 3];


const MokinysT1 = Mokinys1[0];
console.log(MokinysT1);

const SumaT1 = Mokinys1[1] + Mokinys1[2] + Mokinys1[3] + Mokinys1[4] + Mokinys1[5];
console.log(SumaT1);

const Mokinys1T = Mokinys1.shift();
console.log(Mokinys1T);
console.log(Mokinys1);

const reiksmesilgis = Mokinys1.length
console.log(reiksmesilgis);

const vidurkis = SumaT1/reiksmesilgis;
console.log(vidurkis);


const Mokinys11 = ['Tadas', 8, 9, 10, 4, 7];
const Mokinys12 = ['Rima', 8, 3, 5, 4, 7];
const Mokinys13 = ['Gabija', 9, 3, 10, 5, 2];
const Mokinys14 = ['Ona', 8, 6, 7, 5, 9];
const Mokinys15 = ['Jonas', 2, 2, 3, 5, 3];

function MokinioVidurkis (mokinys)
{
    console.log('Mokinio vardas: ' + mokinys[0]);

    let vidurkis = (mokinys[1]+mokinys[2]+mokinys[3]+mokinys[4]+mokinys[5])/5;
    if(vidurkis>=3.5)
    {
        console.log(mokinys[0] + ' išlaikė. Vidurkis:' + vidurkis);
    }
    else
    {
        let vidurkisNaujas = ((vidurkis*5)+10)/6;
        console.log(mokinys[0] + ' neišlaikė. Dabartinis vidurkis:' + vidurkis);
        if(vidurkisNaujas>=3.5)
        {
            console.log(mokinys[0] + ' išlaikytų kursą jeigu gautų vieną dešimtuką');
        }
    }
}

MokinioVidurkis(Mokinys11);
MokinioVidurkis(Mokinys12);
MokinioVidurkis(Mokinys13);
MokinioVidurkis(Mokinys14);
MokinioVidurkis(Mokinys15);

console.log();

/*2 užduotis - filmų rekomendacija:
Susikurkite bent 5 sąrašo tipo kintamuosius, kurių pirmas narys yra filmo pavadinimas, 
antras narys yra filmo žanras, o trečias narys yra skaičiaus tipo filmo įvertis.
Susikurkite 2 kintamuosius kurie -pirmas nurodo jūsų mėgstamą žanrą ir 
antras nurodo jūsų norimą matyti filmo įvertį.
Padarykite funkciją, kuri iš pasirinktų 3 filmų, pagal jūsų norimą žanrą ir įvertį išveda į console kokie filmai jums patiktų. 
Jei joks filmas netinka, turi tai pranešti.
*/

const filmas1 = ['lobis', 'istorinis', 8.5];
const filmas2 = ['srekas', 'animacinis', 9];
const filmas3 = ['surasti pi', 'detektyvas', 6];
const filmas4 = ['svajoniu sala', 'romantinis', 8];
const filmas5 = ['legenda', 'istorinis', 7];

const ManoBalas = 8;
const ManoZanras = 'istorinis';

function filmoPasiulymas (filmasA, filmasB, filmasC, balas, zanras)
{
    let ArYraFilmas = false;

    if (filmasA[2]>=balas && filmasA[1] == zanras)
    {
        console.log ("Jums tiktų: " + filmasA[0]);
        ArYraFilmas = true;
    }
    if (filmasB[2]>=balas && filmasB[1] == zanras)
    {
        console.log ("Jums tiktų: " + filmasB[0]);
        ArYraFilmas = true;
    }
    if (filmasC[2]>=balas && filmasC[1] == zanras)
    {
        console.log ("Jums tiktų: " + filmasC[0]);
        ArYraFilmas = true;
    }

    if(ArYraFilmas == false)
    {
        console.log('Jums tinkamų filmų nėra')
    }
}

filmoPasiulymas(filmas1, filmas2, filmas4, ManoBalas, ManoZanras);

console.clear();

/* Užduotys su IF ir sąrašais(array)
1. Patikrinkite, ar sąraše yra tam tikras skaičius.
a. Pavyzdys: Patikrinkite, ar sąraše [1, 2, 3, 4] yra skaičius 3.*/

const numbers = [1, 2, 3, 4];
console.log(numbers);

console.log('numbers:', 0);
console.log('numbers:', 1);
console.log('numbers:', 2);
console.log('numbers:', 3);

for (let i = 0; i < 4; i++) {

    console.log('numbers:', i);
}

/*2. Patikrinkite, ar masyvas tuščias.
a. Pavyzdys: Patikrinkite, ar sąrašas [] yra tuščias.*/

const empty = [];
console.log(empty);
console.log(empty[0]);

/*3. Nustatyti, ar sąraše yra teigiamas skaičius.
a. Pavyzdys: Patikrinkite, ar sąraše [1, -2, 3, -4] yra teigiamų skaičių.*/

const numbers1 = [1, -2, 3, -4];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

if(numbers1 <= 0) {
    console.log('nera teigiamu skaiciu'); 
} else {
    console.log('yra teigiamu skaiciu');
}

/*4. Patikrinkite, ar visi sąrašo skaičiai yra lyginiai.
a. Pavyzdys: Patikrinkite, ar [2, 4, 6] yra tik lyginiai skaičiai.
5. Patikrinkite, ar kuris nors skaičius sąraše yra neigiamas.
a. Pavyzdys: Patikrinkite, ar kuris nors skaičius sąraše [3, 5, -2] yra neigiamas.
6. Patikrinkite, ar pirmas skaičius sąraše yra didesnis už paskutinį.
a. Pavyzdys: Patikrinkite, ar pirmas skaičius sąraše [1, 3, 5] yra didesnis už
paskutinį.
7. Patikrinkite, ar sąrašo ilgis didesnis už 5.
a. Pavyzdys: Patikrinkite, ar sąrašo [1, 2, 3, 4, 5, 6] ilgis yra didesnis nei 5.
8. Patikrinkite, ar sąraše yra tik teksto tipo kintamieji
a. Pavyzdys: Patikrinkite, ar [„obuolys“, ‚bananas‘, „vyšnia“] yra tik tekstai.
9. Raskite didžiausią skaičių sąraše ir patikrinkite, ar jis didesnis už 10.
a. Pavyzdys: Patikrinkite, ar didžiausias skaičius sąraše [2, 5, 12, 4] yra didesnis
nei 10.
10. Patikrinkite, ar masyve yra daugiau nei 3 to paties skaičiaus elementai.
a. Pavyzdys: Patikrinkite, ar [2, 2, 2, 2, 2, 5, 6] turi daugiau nei 3 skaičiaus 2
elementus  */

/* FUNKCIJOS
1. Sukurkite funkciją, skirtą patikrinti, ar skaičius yra teigiamas.*/
const abc = 4;
const sba = -3;
function skaicius(jjj) {
    if (jjj<0) {
        return (`neigiamas`)
    } else 
    {  
        return (`teigiamas`)
            }
}

console.log(skaicius(abc));
console.log(skaicius(sba));

const ab = -4;
const sb = 3;
function skaicius(jjj) {
    if (jjj<0) {
        return (`neigiamas`)
    } else 
    {  
        return (`teigiamas`)
            }
}

console.log(skaicius(ab));
console.log(skaicius(sb));

/*2. Sukurkite funkciją skaičiaus kvadratui apskaičiuoti.*/
// 4*4 = 16

function sum1(a1, b1) {
    const result1 = a1 * b1;
    return ` ${a1} * ${b1} = ${result1} `;
}
console.log(sum1(4, 4));  

console.log(4**2);

const vv = 4
function sum1(vd) {
    return result = vd**2;
}
console.log(sum1(vv));  

/*3. Sukurkite funkciją, kuri paima du skaičius ir išveda į console didesnįjį. */

const e = 11;
const d = 9;
function big(a , b) {
    if (a > b) {
        return (a)
    } else 
        if (a < b){
            return (b)
        }
    }

console.log(big(e,d));

/*4.Sukurkite funkciją, kuri patikrintų, ar eilutėje yra žodis „JavaScript“.*/ 

function word (ArYraZodis)
{
    if (ArYraZodis === "JavaScript")
    {
        return ('yra zodis "JavaScript".')
    } 
    else
    {
        return ('nera zodzio "JavaScript".')
    }
}

console.log(word('JavaScript'));

console.log('-----');

/*5. Sukurkite funkciją, tikrinančią, ar skaičius yra lyginis.*/

const li = 8;
const gi = 13;
function skaicius(a) {
    if (a%2 === 0) {
        return 'lyginis'
    } else {
        return 'nelyginis'
    }
}
console.log(skaicius(li));

console.log('-----');

/*6. Sukurkite funkciją, kuri į console išvestų priešingą reikšmę (jei skaičius teigiamas,
išvestų neigiamą, jei yra gaunamas žodis tai žodį turi parašyti atvirkčiai. Apsibrėžkite
kokio ilgio žodis turi būti gaunamas! ar 4, ar 5 ar kiek raidžių! imkite vieną
variantą kolkas)*/

let ilgasZodis = 'ezys';
let vienaRaide = ilgasZodis.charAt(0);

let pirmaraide = ilgasZodis.charAt(1);
let antraraide = ilgasZodis.charAt(2);
let treciaraide = ilgasZodis.charAt(3);
let ketvirtaraide = ilgasZodis.charAt(4);
let penktaraide = ilgasZodis.charAt(5);

let visasZodis = ilgasZodis.charAt(5) + ilgasZodis.charAt(4) + ilgasZodis.charAt(3) + ilgasZodis.charAt(2) + ilgasZodis.charAt(1) + ilgasZodis.charAt(0);
let visasZodis1 = penktaraide + ketvirtaraide + treciaraide + antraraide + pirmaraide + vienaRaide
console.log(visasZodis);
console.log(visasZodis1);

/*7. Sukurkite funkciją, kuri apskaičiuotų stačiakampio plotą.
a. Padaryti su sąrašo (array) tipo kintamuoju
b. Padaryti su keliais skaičių tipo kintamaisiais*/

// c=a*b  a1 = 3, b1= 5.

function plotas (a1, b1) 
{
  const result = a1 * b1;
  return `${result} `  
}
console.log(plotas(3, 5));

console.log('------');

const side = [3, 5];
const plotas1 = side[0] * side[1];
console.log(plotas1);

//8. Sukurkite funkciją, kuri tikrina, ar skaičius dalijasi iš 3.

let num = 9;
let num1 = 3;
let num2 = 2;
let num3 = 5;

function skaicius (a) {  
    if ( a%3 === 0 ) {
        return ('dalijasi')
    } else {
        return ('nesidalija')
    }
}

console.log(skaicius(num));
console.log(skaicius(num1));
console.log(skaicius(num2));
console.log(skaicius(num3));

console.log('-----');

//9. Sukurkite funkciją, kuri tikrina, ar teksto tipo kintamasis prasideda raide 'a'.

function firstSymbol (zodis) {
    if ( zodis[0] === 'a') {
        return true
    } else {
        return false
    }
}
console.log(firstSymbol('arbata'));

/*10. Sukurkite funkciją trijų skaičių vidurkiui rasti.
11. Sukurkite funkciją, grąžinančią teksto tipo kintamojo ilgį.
12. Sukurkite funkciją dviem eilutėms sujungti.
13. Sukurkite funkciją, kuri tikrina, ar skaičius yra tarp dviejų reikšmių (imtinai */

console.log('-----');
// FOR CIKLAS
// 1. Spausdinkite skaičius nuo 1 iki 10 naudodami for ciklą.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('-----');
//2. Spausdinkite skaičius nuo 10 iki 1 atvirkštine tvarka naudodami for ciklą.

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log('-----');
//3. Spausdinkite kiekvieną lyginį skaičių nuo 0 iki 20 naudodami for ciklą.

for (let i=0; i<21; i+=2) {
    console.log(i);
}

console.log('-----');
//4. Spausdinkite kiekvieną nelyginį skaičių nuo 0 iki 20 naudodami for ciklą.

for (let i=1; i<20; i+=2) {
    console.log(i);
}

console.log('-----');
//5. Išspausdinkite pirmuosius 10 skaičių kvadratų (1^2, 2^2, 3^2 ir t. t.).

for (let i = 1; i <= 10; i++) {
    console.log(`${i}^2`);
}

for (let i = 1; i <= 10; i++) {
    console.log(`${i}**2 = ${i**2}`);
}

console.log('-----');
//6. Išspausdinkite pirmuosius 10 skaičių kubų (1^3, 2^3, 3^3 ir t. t.).

for (let i = 1; i <= 10; i++) {
    console.log(`${i}^3`);
}

for (let i = 1; i <= 10; i++) {
    console.log(`${i}**3 = ${i**3}`);
}

console.log('-----');
//7. Atspausdinkite 7 daugybos lentelę (7 × 1, 7 × 2 ir t. t.).

for (let k = 1; k <= 10; k++) {
    console.log(`7 * ${k} = ${7 * k}`);
}

console.log('-----');

//8. Atspausdinkite nuo 1 iki 5 žvaigždučių (*) seriją (pvz., *, **, *** ir t. t.).

let star = '';
for (let z = 1; z <= 5; z++) {
    star = star + '*'
    console.log(star);
    }    

console.log('-----');

//9. Atspausdinkite atvirkštinę eigą su žvaigždutėmis 5 eilutėse (pvz., *****, ****, *** ir t. t.).

for (let i = 5; i>=1; i--) {
    let stars1 = '';
    for (let z = i; z >=1; z--) {
        stars1 = stars1 + '*';
    }
    console.log(stars1);
}
console.log('-----');
//10. Spausdinti skaičius nuo 1 iki 50, kurie dalijasi iš 3.

for (let i = 1; i < 50; i++) {
    if (i%3 === 0) {
    console.log(i)
    }
}

console.log('-----');
//11. Spausdinti skaičius nuo 1 iki 50 imtinai, kurie dalijasi iš 5.

for (let k = 1; k <= 50; k++) {
    if (k%5 === 0) {
    console.log(k)
    }
}

console.log('-----');
//12. Spausdinti skaičius nuo 1 iki 100, kurie dalijasi ir iš 3, ir iš 5.

for (let k = 1; k <= 100; k++) {
    if (k%3 === 0 && k%5 === 0) {
    console.log(k)
    }
}

console.log('-----');
//13. Sukurkite for ciklą, kuris penkis kartus išspausdintų "Hello, World!".

for ( let i = 1; i <= 5; i++) {
    console.log("Hello, Word")
}

console.log('-----');
//Sunkesnės užduotys:
/*1. Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 100, tačiau kiekvieną skaičių, kuris
dalijasi iš 4, reikia pakeisti žodžiu „Fizz“.*/

for (let i = 1; i<= 100; i++) {
    if(i%4 === 0) {
        console.log("Fizz")
    } else { 
    console.log(i)
    }
}
console.log('-----');
/*2. Spausdinkite skaičius nuo 1 iki 100, bet skaičius, kurie dalijasi iš 3, pakeiskite "Fizz",
skaičius, kurie dalijasi iš 5, - "Buzz", o skaičius, kurie dalijasi iš abiejų, - "FizzBuzz". */

for (let i = 1; i<= 100; i++) {
    if(i%3 === 0) {
        console.log("Fizz")
    }  if (i%5 === 0) { 
        console.log("Buzz")
    }  if (i%3 === 0 && i%5 ===0) {
        console.log("FizzBuzz")
    } if (i%3 !== 0 && i%5 !== 0) {
        console.log(i)
    }
}

console.log('-----');
//3. Spausdinkite pirmuosius 10 skaičių Fibonačio sekoje. ????let FibonačioSeka = 0 1 1 2 3 5 8 13 21 34

/*4. Spausdinkite skaičius nuo 1 iki 20 ir prie kiekvieno lyginio skaičiaus spausdinkite
"Even", o prie kiekvieno nelyginio - "Odd".*/

for ( let i = 1; i <+ 20; i++) {
    if ( i%2 === 0) {
        console.log("Even")
    } else {
        console.log("Odd")
    }
  }

console.log('-----');
//5. Spausdinti bet kurio pasirinkto skaičiaus daugybos lentelę.

for (let i = 1; i <= 10; i++) {
    console.log(`4 * ${i} = ${4 * i}`);
}
console.log('-----');
for (let i = 1; i <= 10; i++) {
    console.log(`77 * ${i} = ${77 * i}`);
}
console.log('-----');
/*6. Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 30, bet tik tuos, kurie dalijasi iš 2
arba 3.*/

for (let i = 1; i <= 30; i++) {
    if (i%2 === 0) {
        console.log(i)
    } else {
    if (i%3 === 0) {
        console.log(i)
    } }
}
console.log('-----');
for  (let i = 1; i <= 30; i++) { // kai dalijasi is 2 ir is 3
    if (i%2 === 0 && i%3 === 0) {
        console.log(i)
    } 
}
console.clear();
/*7. Sukurkite for ciklą, kad patikrintumėte, ar skaičius yra pirminis, ir išspausdintumėte
pranešimą.    isspresta pagal pavyzdi */

let nr = 7;
function yraPirm (sk) {
    if (sk <= 1) {
        return false
    } if (sk <= 3) {
        return true
    } if (sk%2 === 0 || sk%3 === 0) {
        return false
    }
for (let i = 5; i * i <= sk; i += 6) {
    if (sk%1 === 0 || sk%(i + 2) === 0) {
        return false
    } }
    return true
} 
console.log(yraPirm(nr));

//8. Spausdinkite pirmuosius 10 pirminių skaičių, naudodami for ciklą ir if sąlygas.
console.log('-----');
//9. Išspausdinkite visų lyginių skaičių nuo 1 iki 100 sumą.

let suma = 0
for  (let i = 2; i < 101; i+=2) 
{
    suma = suma + i
}
console.log(suma); 

console.log('-----');
//Ciklai
//1. Parašykite for ciklą, kuris apskaičiuotų visų skaičių nuo 5 iki 15 sumą. 

let sum = 0
for (let i = 5; i <=15; i++) {
    sum = sum + i
}
console.log(sum);
//2. Parašykite for ciklą, kuris į console išvestų visas žodžio ‘Vakaras’ raides po vieną

let zodis = 'Vakaras';
for (let i = 0; i <zodis.length; i++) {
    raide = zodis[i]
    console.log(raide)
}
//3. Parašykite for ciklą, kuris išvestų šešeto daugybos lentelę

let n = 6;
for (let i = 1; i<11; i++) { 
    console.log(`6 * ${i} = ${6 * i}`);
}
console.log('-----');
//4. Parašykite for ciklą, kuris į consolę išvestų nuo 5 iki 1, ir po vieneto (vietoje 0) į ekraną išvestų žodį ‘BOOM’

for (let i = 5; i >= 0; i--) {
    if (i > 0) {
    console.log(i); 
}  else {
    console.log(`'BOOM'`)
}
}       
//5. Parašykite for ciklą, kuris sudėtų visus lyginius skaičius nuo 3 iki 18;

let lyg = 0
for (let i = 4; i < 19; i+=2) {
    lyg = lyg + i
} 
console.log(lyg);
//6. Parašykite for ciklą, kuris išvestų visus sąrašo elementus į console. 

let elementai = ['rytas', 'diena','vakaras', 'naktis'];
for (let i = 0; i<elementai.length; i++) {
    const s = `${elementai[i]}`
    console.log(s);
}  
//7. Parašykite ciklą, kuris iš vardų sąrašo išvestų visus elementus, pridėdamas ‘Mano vardas - ’ console log eilutės pradžioje 

let names = ['Saulius', 'Estera', 'Juozapas', 'Rebeka'];
for (let i = 0; i < names.length; i++){
    let v = `Mano vardas - ${names[i]}.`
    console.log(v);
}
//8. Parašykite for ciklą, kuris sudėtų visus sąrašo skaitinius elementus. 

const list = [3, 5, 7, 8, 12];
let sudetis = 0;
for (let i = 0; i < 5; i++) {
   sudetis += list[i]
}
console.log(sudetis);
console.log('-----');
//9. Parašykite for ciklą, kuris išvestų į console visus sąrašo elementus nuo paskutinio iki pirmo

let el = [3, 5, 7, 8, 12];
for (let i = 4; i >= 0; i--) {
    console.log(el[i]);
}
console.log('-----');
//10. Parašykite for ciklą, kuris išvestų į console tik tuos skaičius, jei jie yra pinigų reikšmės (1, 2, 5, 10, 20, 50, 100, 200, 500) 

for (let i = 1; i <=500; i++) {
    if ( i === 1 || i === 2 || i === 5 || i === 10 || i === 20 || i === 50 || i === 100 || i === 200 || i === 500)
    {
        console.log(i);
    }
}
console.log('-----');

let pinigai = [1, 2, 5, 10, 20, 50, 100, 200, 500];
for (let i = 0; i < 9; i++) {
    console.log(pinigai[i]);
}
//11. Parašykite for ciklą, kuris iš sąrašo Raidės [ ‘L’, ‘a’, ‘b’, ‘a’, ‘s’] sudėliotų kintamąjį Žodis, kurio reikšmė yra ‘Labas’  

const Raides = ['L','a', 'b', 'a', 's'];
let zodis2 = '';
for (let i = 0; i < Raides.length; i++) {
    zodis2 +=Raides[i]
}  
console.log(zodis2); 
//12. Parašykite for ciklą, kuris atskirai atspausdintų kiekvieną žodžio Programavimas raidę. 

const Atskirai ='Programavimas';
for (let i = 0; i < Atskirai.length; i++) {
    console.log(Atskirai[i]);
}
//13. Parašykite for ciklą, kuris sudaugintų skaičius nuo 2 iki 10. Už ciklo išveskite į consolę reikšmę 

let daug = 1
for (let i = 2; i < 11; i++) {
   daug =  daug * i
} 
console.log(daug); 
console.log('-----');
//14. Parašykite for ciklą, kuris apskaičiuos visų nelyginių skaičių nuo 1 iki 30 sumą 
// 1pav:
let nelyginis = 0;
for (let i = 1; i < 30; i+=2) {
    nelyginis = nelyginis + i
}
console.log(nelyginis); 
console.log('-----');
// 2pav:
let sum32y = 0
 for (let i = 0; i <=30 ; i++) { 
    if (i%2==!0)  //nelygu
        sum32y+=i;
}
console.log(sum32y);
console.log('-----');
//15. Parašykite for ciklą, kuris į console išvestų skaičius nuo 20 iki 10 

for (let i = 20; i >=10; i--) 
{
    console.log(i); 
}
//16. Parašykite for ciklą, kuris į console išvestų sąrašo RaidėsAtbulai [ ‘s’, ‘a’, ‘b’, ‘a’, ‘L’] elementus vienas po kito nuo galo iki pradžios

const RaidėsAtbulai = [ 's', 'a', 'b', 'a', 'L'];
for (let i = RaidėsAtbulai.length-1; i >=0; i--) {
    console.log(RaidėsAtbulai[i])
}
console.log('-----');
//17. Parašykite for ciklą, kuris į console išvestų kintamojo ŽodisAtbulas = ‘samivamargorP’ atskiras raides vieną po kitos 

const ZodisAtbulas = 'samivamargorP';
for (let i = 0; i < ZodisAtbulas.length; i++) {
    console.log(ZodisAtbulas[i]);
}
//18. Parašykite for ciklą, kuris į consolę išveda skaičius nuo 1 iki 100. Jei skaičius dalinasi iš 7, papildomai į consolę yra išvedamas žodis ‘lucky’ 

//let g = 0;
for(let i = 1; i <= 100; i++) {
    if (i%7 === 0) {
        console.log('lucky');
       }   else {
            console.log(i);
    } }

console.log('-----');
//19. Parašykite for ciklą, kuris į console po vieną atskirai išvestų dvigubas sąrašo Dvigubinti [2, 3, 6, 8] reikšmes (Gaunamas atsakymas: 4, 6, 12, 16)

const dvigubas = [2, 3, 6, 8];
for (let i = 0; i < 4; i++) {
   console.log(dvigubas[i]*2);
}
console.log('-----');
//20. Parašykite for ciklą, kuris iš sąrašo DaugSkaičių [2, 14, 10, 1000, 503, 8, 0] išvestų visus skaičius, kurie yra mažesni už 100 

const DaugSkaičiu = [2, 14, 10, 1000, 503, 8, 0];
for (let i = 0; i < DaugSkaičiu.length; i++) {
    if (DaugSkaičiu[i] < 100)
    console.log(DaugSkaičiu[i]);
    } 
console.log('-----');     
//21. Parašykite for ciklą, kuris apskaičiuotų kiek raidžių a yra žodyje abrakadabra 

const text = 'abrakadabra';
const symbols = {};
for (const s of text) {
    if (symbols[s]) {
        symbols[s]++;
    } else {
        symbols[s] = 1
    }
}
 console.log(symbols);

 let max = 0;
 for (const s in symbols) {
     if (symbols[s] > max) {
         max = symbols[s];
     }
 }
 console.log(max);
// geras
let text2 = 'abrakadabra'
let count = 0
for (i in text2) { 
    if (text2[i] === 'a') {
        count++
    } 
} 
console.log(count);
console.log('-----');
/*22. Parašykite for ciklą, kuris išvestų, kokios būtų sąrašo PridėsiuSkaičių [2, 8, 88, 14] elementų reikšmės,
jei prie kiekvieno elemento pridėtume dvejetą. */




/*23. Parašykite for ciklą, kuris suskaičiuotų kiek žodyje Nebeprisikiškiakopūstėliaudavome yra raidžių e 
24. Parašykite for ciklą, kuris į consolę išvestų kiekvieną žodžio Nebeprisikiškiakopūstėliaudavome e raidę, ir parašytų, kurioje žodžio vietoje ji yra: PVZ: Žodžiui Keletą būtų išvedama: e raidė yra 2 vietoje e raidė yra 4 vietoje 
25. Parašykite for ciklą, kuris išvestų kokia kintamojo let Lobis = 150 reikšmė būtų, jei mes iš jo atimtume reikšmes nuo 20 iki 15. Į consolę išveskite kaip mažėja turtas. 
Funkcijos 
1. Parašykite funkciją, kuri grąžina dviejų skaičių sumą. 
2. Parašykite funkciją, kuri grąžina dviejų skaičių skirtumą. 
3. Parašykite funkciją, kuri grąžina dviejų skaičių sandaugą. 
4. Parašykite funkciją, kuri grąžina dviejų skaičių dalybą. 
5. Parašykite funkciją, kuri grąžina dviejų skaičių vidurkį. 
6. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas. 
7. Parašykite funkciją, kuri patikrina, ar skaičius yra lyginis. 
8. Parašykite funkciją, kuri patikrina, ar skaičius yra nelyginis. 
9. Parašykite funkciją, kuri patikrina, ar skaičius dalijasi iš 5 be liekanos. 
10. Parašykite funkciją, kuri patikrina, ar skaičius yra lygus 100.
11. Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 10. 
12. Parašykite funkciją, kuri grąžina didesnį iš dviejų skaičių. 
13. Parašykite funkciją, kuri grąžina mažesnį iš dviejų skaičių. 
14. Parašykite funkciją, kuri patikrina, ar trys skaičiai yra vienodi. 
15. Parašykite funkciją, kuri patikrina, ar du skaičiai yra lygūs. 
16. Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 1 ir 10. 
17. Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 50 ir 100. 
18. Parašykite funkciją, kuri patikrina, ar skaičius yra neigiamas. 
19. Parašykite funkciją, kuri grąžina „Teigiamas“ arba „Neigiamas“ priklausomai nuo skaičiaus, kurį nusiunčiate funkcijai. 
20. Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 18 (pvz., patikrinimas, ar žmogus pilnametis). 
21. Parašykite funkciją, kuri patikrina, ar perduotas žodis yra „labas“. 
22. Parašykite funkciją, kuri patikrina, ar žodis yra ilgesnis nei 5 simboliai. 
23. Parašykite funkciją, kuri grąžina pirmąją perduoto žodžio raidę. 
24. Parašykite funkciją, kuri grąžina paskutinę perduoto žodžio raidę. 
25. Parašykite funkciją, kuri patikrina, ar žodis prasideda raide „A“. 
26. Parašykite funkciją, kuri grąžina žodžio ilgį. 
27. Parašykite funkciją, kuri grąžina „Ilgas“ arba „Trumpas“, priklausomai nuo žodžio ilgio. Ilgas žodis yra 7 simbolių ilgio arba didesnis, o trumpas yra 6 simbolių ilgio arba trumpesnis 
28. Parašykite funkciją, kuri patikrina, ar du žodžiai yra vienodi. 
29. Parašykite funkciją, kuri grąžina „Diena“ arba „Naktis“, priklausomai nuo perduotos valandos (0–23). 
30. Parašykite vieną funkciją, kuri patikrina skaičiaus vertę, ir jęi: 
a. Skaičius yra teigiamas, išveda į console ‘esu teigiamas’ 
b. Skaičius yra neigiamas, išveda į console ‘esu neigiamas’ 
c. Skaičius yra nulis, išveda į console ‘esu nulis’ 
d. Skaičius yra didesnis už 100, išveda ‘didžiulis skaičius’ 
e. Jei skaičius nėra didesnis už 100, išveda ‘esu mažiukas */







