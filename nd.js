

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

/*4.Sukurkite funkciją, kuri patikrintų, ar eilutėje yra žodis „JavaScript“. (dar nesimokinome)*/ 

const zodis = word ();
function word (JavaScript) 
{
    let ArYraZodis = false;
    if (ArYraZodis === "JavaScript")
    {
        console.log('yra zodis "JavaScript".');
        ArYraZodis = true;
    } 
    if (ArYraZodis !== "JavaScriptls");
    {
        console.log('nera zodzio "JavaScript".');
    }
}

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
let num1 = 3
let num2 = 3.6;
let num3 = 5

function skaicius (a) {  //nesigauna
    if ( a%1 === 0 ) {
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


const text ='arbata';
const firstSymbol = text[0];

function raide (pirmoji) {
    if ( 'a' === text[0]) {
        return (`prasideda raide 'a'`)
    } else {
        return (`neprasideda raide 'a`)
    }
}

console.log(firstSymbol);


const text1 = 'arbata';
const firstSymbol1 = text1[0];

function raide (pirmoji) {
    let pirmaRaide = true;
    if ( pirmaRaide === text1[0]) {
        console.log(`prasideda 'a'`)
    }
    if ( pirmaRaide !== text1[0]) {
        console.log(`neprasideda 'a'`)
        pirmaRaide = false;
    }
}








/*10. Sukurkite funkciją trijų skaičių vidurkiui rasti.
11. Sukurkite funkciją, grąžinančią teksto tipo kintamojo ilgį.
12. Sukurkite funkciją dviem eilutėms sujungti.
13. Sukurkite funkciją, kuri tikrina, ar skaičius yra tarp dviejų reikšmių (imtinai */

