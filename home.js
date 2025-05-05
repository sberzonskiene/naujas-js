//FUNKCIJOS

//● Parašykite funkciją, kuri grąžina visų sveikų skaičių nuo 1 iki n kvadratų sumą.
// kvadratas(5) = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 55
function kvadratas(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i ** 2;
    }
    return suma;
}
console.log(kvadratas(5)); // 55

const vv = 4
function sum1(vd) {

    let result = 0;
    for (let i = 1; i <= vv; i++) {
        result += i**2;
    }
    return result;
}
console.log(sum1(vv));  
console.log('--------');

//● Parašykite funkciją, kuri patikrina, ar du žodžiai yra anagramos.

function anagrams(word1, word2) {
    const normal = str => str.toLowerCase().split('').sort().join('');
    return normal(word1) === normal (word2)  ;
}
  console.log(anagrams("Labas", "labas")) ;
  console.log(anagrams("pilkas", "plikas")) ;

//● Parašykite funkciją, kuri pašalina dublikatus iš masyvo.
//1 Pav.
function dublikatas (arr) {
    const elementas = new Set(arr);
    return [...elementas];
}
console.log(dublikatas([1, 2, 3, 3, 2, 1, 1, 2, 4, 4]));
//2 Pav.
function removeDuplicates(str) {
    const letters = new Set(str.split(''));
    return [...letters].join('');
}
 console.log(removeDuplicates("konkoreziai"));

//● Parašykite funkciją, kuri grąžina pirmą pasikartojantį elementą masyve.

function firstElement(arr) {
    const seen = new Set();
    for (const element of arr) {
        if (seen.has(element)) {
            return element;
        }
        seen.add(element);
    }
    return null; // jei nėra pasikartojančių elementų
    
}
console.log(firstElement([1, 2, 3, 2, 3, 5])); // 2
console.log(firstElement([1, 2, 3, 4, 5])); // null

//● Parašykite funkciją, kuri patikrina, ar skaičius yra pirminis.

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    } return true;
}
console.log(isPrime(1)); 
console.log(isPrime(7)); 
console.log(isPrime(10)); 
console.log(isPrime(15)); 
console.log(isPrime(3));  


/*● Parašykite funkciją, kuri grąžina skaičiaus faktorialą.
● Parašykite funkciją, kuri patikrina, ar žodis yra palindromas (skaitomas vienodai iš
abiejų pusių).
● Parašykite funkciją, kuri grąžina dažniausiai pasikartojantį elementą masyve.
● Parašykite funkciją, kuri grąžina n-tą Fibonacci sekos narį.
● Parašykite funkciją, kuri sukeičia kiekvieną gretimą masyvo porą (jeigu pora
neegzistuoja, paskutinis lieka nepakitęs). Pvz: masyvo [1234] elementai turėtų pasikeisti
į [2143]
● Parašykite funkciją, kuri grąžina masyvą tik su lyginiais skaičiais.
● Parašykite funkciją, kuri grąžina didžiausią skaičių masyve.
● Parašykite funkciją, kuri apskaičiuoja vidurkį masyvo elementų.
● Parašykite funkciją, kuri grąžina masyvą, kuriame kiekvienas elementas yra
padaugintas iš 2.
● Parašykite funkciją, kuri iš duoto teksto paverčia pirmą raidę kiekviename žodyje į
didžiąją.
● Parašykite funkciją, kuri suskaičiuoja balsių kiekį tekste.
● Parašykite funkciją, kuri apverčia masyvą nenaudodama .reverse().
● Parašykite funkciją, kuri patikrina, ar masyvas yra simetriškas (vienodas iš abiejų galų).
● Parašykite funkciją, kuri sukuria atsitiktinį sveiką skaičių tarp min ir max (imtinai).
● Parašykite funkciją, kuri patikrina, ar visi masyvo elementai yra unikalūs.
● Parašykite funkciją, kuri grąžina true, jei masyvas yra nuolat didėjantis. Pvz: masyvas
[1 4 6] bus true, o masyvas [ 1 2 4 1] bus false
● Parašykite funkciją, kuri grąžina žodžių kiekį sakinyje.
● Parašykite funkciją, kuri surūšiuoja masyvą mažėjančia tvarka.
● Parašykite funkciją, kuri pakeičia visus simbolius string'e į žvaigždutes, išskyrus
paskutinius 4.
● Parašykite funkciją, kuri apskaičiuoja skirtumą tarp dviejų datų dienomis.
● Parašykite funkciją, kuri konvertuoja pirmąją raidę į mažąją, jei ji buvo didžioji.
● Parašykite funkciją, kuri suskaičiuoja, kiek duotame tekste žodžių yra bent 5 simbolių
ilgio.
● Parašykite funkciją, kuri grąžina visus skaičius nuo start iki end kaip masyvą.
● Parašykite funkciją, kuri randa antrą didžiausią skaičių masyve.
● Parašykite funkciją, kuri paverčia sekundes į formatą hh:mm:ss.
● Parašykite funkciją, kuri skaičiuoja, kiek kartų duotas simbolis pasikartoja string'e.
● Parašykite funkciją, kuri iš objektų masyvo išfiltruoja tik tuos, kurių reikšmė aktyvus:
true.
● Parašykite funkciją, kuri sugrąžina true, jei masyve yra bent viena neigiama reikšmė.
● Parašykite funkciją, kuri konvertuoja tekstą į „slug“ formą: mažosios raidės ir - vietoj
tarpų.
● Parašykite funkciją, kuri patikrina, ar string'as baigiasi nurodytu tekstu.
● Parašykite funkciją, kuri apskaičiuoja visų teigiamų skaičių sumą masyve.*/
 