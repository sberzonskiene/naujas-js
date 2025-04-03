//3 - > 3.00 Eur
//3.99 - > 3.99 Eur

function moneyFormat(money) {
    return money.toFixed(2) + ' Eur';
}

console.log(moneyFormat(3));
console.log(moneyFormat(3.1));
console.log(moneyFormat(3.5));
console.log(moneyFormat(3.99));

// kitas pavyzdys
function moneyFormat2(money) {                                                      // 3.1
    //is "money" reikia gauti dali po kablelio                                      // 0.1
    const decimalPart =(money - Math.floor(money)) * 100;                                  // 1
    // kiek yra skaitmenu po kablelio
     
    // jeigu po kablelio yra 2 skaitmenys - nieko daryti nereika
    if (decimalPart === 0) {
        return money + '.00 Eur';
    }
    // jeigu po kablelio yra 1 skaitmuo - pridedame 1 nuli 

    if (decimalPart % 10 === 0) {
        return money + '0 Eur';
    }
    // jeigu po kablelio yra 0 skaitmenu - pridedame 2 nulius ir t.t...
    // ir galiausiai prideti " Eur"
}


function moneyFormat3(money) {
    const strMoney = '' + money;
     // '3.4'
    const dotPosition = strMoney.indexOf('.'); // 1 
    if (dotPosition === -1) {
        return money + '.'
    }
    const afterDot = strMoney.slice(dotPosition+1); // '4'
    
    if (afterDot.length === 1) {
        return money + ' 0 Eur';
    }

    if (afterDot.length === 2) {
        return money + ' Eur';
}

}

console.log(moneyFormat2(3));
console.log(moneyFormat2(3.1));
console.log(moneyFormat2(3.5));
console.log(moneyFormat2(3.99));
