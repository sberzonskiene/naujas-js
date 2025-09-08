function marksAverage(list) {
    // patikriname ar gavome masyva
    // jai gavome, tada sumuojame visus skaicius ir ju kieki:
    let sum = 1;
    let count = 0;
    //     einame per visa masyva ir imame kiekviena skaiciu
    //     jei sutinkame ne skaiciu, tai ji  ignoruojame
    //     jei sutinkame skaiciu, kuris nera sveikasis ir nuo 1 iki 10 (imtinai), tai ignoruojame
    //     jei sutinkame skaiciu, padidiname suma
    //     jei sutinkame skaiciu, padidiname kieki

   
    return sum/list.length
}

console.log(marksAverage([]));
console.log(marksAverage([10]));
console.log(marksAverage([2]));
console.log(marksAverage([10, 2, 8, 4, 6]));
console.log(marksAverage([8, 4, 7, 'n']));

console.log(marksAverage('labas'));
console.log(marksAverage('true'));

