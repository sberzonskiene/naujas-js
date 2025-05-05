//FUNKCIJOS
//1. Parašykite funkciją, kuri grąžina dviejų skaičių sumą.

function plus(a, b) {
    const result = a + b
    return `${result}`;
}
console.log(plus(9, 11));

//2. Parašykite funkciją, kuri grąžina dviejų skaičių skirtumą. 

function minus(c, d) {
    const result = c - d
    return `${result}`;
}
console.log(minus(50, 15));

//3. Parašykite funkciją, kuri grąžina dviejų skaičių sandaugą. 

function sandauga(e, f) {
    const result = e * f
    return `${result}`;
}
console.log(sandauga(7, 11));

//4. Parašykite funkciją, kuri grąžina dviejų skaičių dalybą.

function dalyba(g, h) {
    const result = g / h
    return `${result}`;
}
console.log(dalyba(15, 3));

//5. Parašykite funkciją, kuri grąžina dviejų skaičių vidurkį. 

//6. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas. 
function teigiamas(ab) {
    if( ab >= 0) 
    {
        return `true`;
    } else {
        return 'false';
    }
} 
console.log(teigiamas(15));
console.log(teigiamas(-2));
/*7. Parašykite funkciją, kuri patikrina, ar skaičius yra lyginis. 
8. Parašykite funkciją, kuri patikrina, ar skaičius yra nelyginis. 
9. Parašykite funkciją, kuri patikrina, ar skaičius dalijasi iš 5 be liekanos.*/

//10. Parašykite funkciją, kuri patikrina, ar skaičius yra lygus 100.
let sim = 100;
function simtas() {
    if(sim === 100) {
        return `truee`;
    } else {
        return 'falsee';
    }  
}
console.log(simtas());

/*11. Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 10. 
12. Parašykite funkciją, kuri grąžina didesnį iš dviejų skaičių. 
13. Parašykite funkciją, kuri grąžina mažesnį iš dviejų skaičių. 
14. Parašykite funkciją, kuri patikrina, ar trys skaičiai yra vienodi. 
15. Parašykite funkciją, kuri patikrina, ar du skaičiai yra lygūs.*/

//16. Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 1 ir 10.

function tarp() {
    let a = 4;
    if(1 < a && a < 10 ) {
        return `taip`;
    } else {
        return `ne`;
    }
}
console.log(tarp());

/*17. Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 50 ir 100. 
18. Parašykite funkciją, kuri patikrina, ar skaičius yra neigiamas. 
19. Parašykite funkciją, kuri grąžina „Teigiamas“ arba „Neigiamas“ priklausomai nuo skaičiaus, kurį nusiunčiate funkcijai. 
20. Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 18 (pvz., patikrinimas, ar žmogus pilnametis). 
21. Parašykite funkciją, kuri patikrina, ar perduotas žodis yra „labas“. 
22. Parašykite funkciją, kuri patikrina, ar žodis yra ilgesnis nei 5 simboliai. 
23. Parašykite funkciją, kuri grąžina pirmąją perduoto žodžio raidę. 
24. Parašykite funkciją, kuri grąžina paskutinę perduoto žodžio raidę.*/ 

//25. Parašykite funkciją, kuri patikrina, ar žodis prasideda raide „A“. 
let simbolis = 'Abrikosas';
function firstSymbolA(simbolis) {
    if (simbolis[0] === 'A') {
        return ['true'];
    } else {
        return ['false'];
    }
}
console.log(firstSymbolA(simbolis));
console.log(firstSymbolA('arbata'));
console.log(firstSymbolA('vanduo'));

//26. Parašykite funkciją, kuri grąžina žodžio ilgį. 

/*27. Parašykite funkciją, kuri grąžina „Ilgas“ arba „Trumpas“, priklausomai nuo žodžio ilgio. Ilgas žodis yra 7 simbolių ilgio arba didesnis, 
o trumpas yra 6 simbolių ilgio arba trumpesnis */

let ak = "akvariumas";
let so = "sodas";

function ilgasTrumpas(zodis) {
    if(zodis.length >= 7 ) {
        return 'Ilgas';
    } else 
    if(zodis.length <=6 )  {
            return 'Trumpas';
    }
}
console.log(ilgasTrumpas(ak));
console.log(ilgasTrumpas(so));

//28. Parašykite funkciją, kuri patikrina, ar du žodžiai yra vienodi. 

//29. Parašykite funkciją, kuri grąžina „Diena“ arba „Naktis“, priklausomai nuo perduotos valandos (0–23). 

function dienaNaktis(time) {
    if (time >= 6 && time <= 21) {
        return "Diena";
    } else {
        return "Naktis" 
    }
}
console.log(dienaNaktis(9));
console.log(dienaNaktis(3));
console.log(dienaNaktis(16));
console.log(dienaNaktis(22));

/*30. Parašykite vieną funkciją, kuri patikrina skaičiaus vertę, ir jei: 
a. Skaičius yra teigiamas, išveda į console ‘esu teigiamas’ 
b. Skaičius yra neigiamas, išveda į console ‘esu neigiamas’ 
c. Skaičius yra nulis, išveda į console ‘esu nulis’ 
d. Skaičius yra didesnis už 100, išveda ‘didžiulis skaičius’ 
e. Jei skaičius nėra didesnis už 100, išveda ‘esu mažiukas */

let value = 150;

function verte(v) {
    if (value > 0) {
        console.log('esu teigiamas');
    } else   if (value < 0) {
        console.log('esu neigiamas');
    }
    if (value === 0) {
        console.log('esu nulis');
    }
    if (value >= 100) {
        return ('didziulis skaicius');
    } else {
      return ('esu maziukas');
    }
}
console.log(verte(value));
console.log('---------- ');
// FUNKCIJOS SU FOR CIKLAIS VIDUJE
//1. Parašykite funkciją, kuri išvestų skaičiaus faktorialą 

function faktorialas(z) {
    let result = 1
    for (let i = 1; i <= z; i++) {
        result *= i
    }
    return result;
}
console.log(faktorialas(7));

//2. Parašykite funkciją, kuri apskaičiuotų kiek kartų tam tikra raidė pasikartojo žodyje arba sakinyje 

/*function countLetter(word, letter) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCace() === letter.toLowerCace()) {
        count++;
      } 
    }
    return count;
  } 
   console.log(countLetter("Kakavinukas", 'K'));*/

/*function countLetter(word, letter) {
           let count =0;
           for (let i = 0; i < word.length; i++) {
             if (word[i].toLowerCase() === letter.toLowerCase()) {
                count++;
             }
           }
          return count;
         }
    
        console.log(countLetter("Ananasas", 'A'));*/

//3. Padarykite funkciją, kuri grąžintų visus skaičiaus 4 kartotinius nuo 1 iki 50 

/*function multiplesOfThree() {
    let result = [];
    for (let i = 4; i <= 50; i+=4) {
        result.push(i);
    }
    return result;
}
console.log(multiplesOfThree());

//4. Parašykite funkciją, kuri patikrintų ar duotas žodis yra palindromas 

/*function isPalindrome(word) {
    let reversed = '';
    for (let i =word.length-1; i >=
    }

    
}

 /*function isPalindrome(word) {
       let reversed = '';
      for (let i = word.length-1; i >= 0; i--) {
         reversed += word[i];
      }
       return reversed === word;
    }

    console.log(isPalindrome("salas"))
/*5. Parašyk funkciją, kuri suskaičiuoja kiek balsių yra žodyje 
 Parašyk funkciją, kuri suskaičiuoja kiek balsių yra žodyje nesvarbu ar didžiosios ar mazosios
    // function skaiciuotiBalses(tekstas) {
    //   const balses = ['a', 'e', 'i', 'o', 'u', 'ą', 'ę', 'ė', 'į', 'ų', 'ū', 'y'];
    //   let kiekis = 0;
    //   for (let raide of tekstas) {
    //     if (balses.includes(raide)) {
    //       kiekis++;
    //     }
    //   }
    //   return kiekis
    // }
    
    // // Pavyzdys 
    // console.log(skaiciuotiBalses("Labas rytas")); // Grąžins 4


6. Sukurk funkciją, kuri visus tarpus tekste pakeičia pabraukimais (underscore) 
function pakeistiTarpus(tekstas) {
    //   return tekstas.replaceAll(' ', '_');
    // }
    
    // // Pavyzdys
    // console.log(pakeistiTarpus("Labas rytas visiems")); // "Labas_rytas_visiems"

7. Sukurk funkciją, kuri padvigubina visus skaičius masyve 
 function padvigubintiMasyva(masyvas) {
    //     let m = [];
    //   for (let skaicius of masyvas) {
    //      m.push(skaicius * 2);
    //   }
    //   return m;
    // }
    
    // // Pavyzdys
    // console.log(padvigubintiMasyva([1, 2, 3, 4])); // [2, 4, 6, 8]
8. Sukurk funkciją, kuri suranda ilgiausią žodį sakinyje 
 function padvigubintiMasyva(masyvas) {
    //     let m = [];
    //   for (let skaicius of masyvas) {
    //      m.push(skaicius * 2);
    //   }
    //   return m;
    // }
    
    // // Pavyzdys
    // console.log(padvigubintiMasyva([1, 2, 3, 4])); // [2, 4, 6, 8]
9. Funkcija, kuri išrikiuoja žodžius pagal ilgį didėjančia tvarka 
function rikiuotiPagalIlgi(tekstas) {
//        return tekstas.split(' ').sort((a, b) => a.length - b.length);
//     }
//     console.log(rikiuotiPagalIlgi("Pabandyk išrūšiuoti vien"))

10. Funkcija, kuri grąžina pirmą skaičių masyve, kuris dalinasi iš 7 
const masyvas = [1, 3, 14, 7];//ats 14
   
    // //10 Funkcija, kuri grąžina pirmą skaičių masyve, kuris dalinasi iš 7
    // function pirmasDalinasiIs7(m) {
    //     let b  = masyvas;
    //   return m.find(x => x % 7 === 0);
    // }
  
    // console.log(pirmasDalinasiIs7([1, 2, 21])) //21
11. Funkcija, kuri priima masyvą vardų ir grąžina tik tuos, kurie prasideda „A“ raide 
12. Funkcija, kuri turi sąraše rasti skaičių, kuris jame kartojasi daugiau nei vieną kartą 
13. Sukurk funkciją, kuri grąžins visus duoto sąrašo skaičius, kurie yra tarp dviejų nurodytų reikšmių 
([2, 5, 36, 8, 15, 6] masyvui nurodžius 5 20 intervalą, bus grąžinama [5, 8, 15, 6] ) 
14. Parašykite funkciją, kuri iš žodžių sąrašo išrinktų ir grąžintų tik tuos žodžius, kuriuose yra raidė e*/


