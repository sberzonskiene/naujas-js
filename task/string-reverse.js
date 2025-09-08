function stringReverse(text) { 
    let result = '';

// logika: text -> text

    for (let i = text.length -1; i >= 0; i--) {
        result += text[i];
    }
    return result;
}
console.log(stringReverse('abc'));
console.log(stringReverse('sedek'));
console.log(stringReverse('Sigis'));

//atvirkstinis tekstas

function stringReverse(text) { 
    let result = '';

for (let i = 0; i < text.length; i++) {
    result = text [text.length - i - 1];
}
return result;
}

console.log(stringReverse('abc'));
console.log(stringReverse('sedek'));
console.log(stringReverse('Sigis'));

function stringReverse(text) {
    if (typeof text !== 'string') {
        return 'Reikalinga string tipo reiksme.';
    }

    // a    a
    // b    ba
    // c    cba

    let result = '';

    for (let i = 0; i < text.length; i++) {
        result = text[i] + result;
    }
    return result;
 }

console.log(stringReverse('abc'));
console.log(stringReverse('sedek'));
console.log(stringReverse('Sigis'));

console.log(stringReverse([]));
console.log(stringReverse([1, 2]));
console.log(stringReverse(['asd', , 'efre']));
console.log(stringReverse(14586251));
console.log(stringReverse(true));
console.log(stringReverse(stringReverse));
console.log(stringReverse(null));
console.log(stringReverse(undefined));
console.log(stringReverse());