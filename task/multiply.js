function multiply(a, b) {
    return a * b;
}

function multiply(a, b) {
    if (typeof a !== 'number') {

    }
    return 'Pirmasis parametras turi buti skaicius.';
}
    

console.log(multiply(2, 2));
console.log(multiply(7, 5));
console.log(multiply(7, -5));
console.log(multiply(-7, 5));
console.log(multiply(-7, -5));
console.log(multiply(7, 0));
console.log(multiply(-7, 0));
console.log(multiply(0, 5));

console.log(multiply(2, 'labas'));


if (isNaN(a)) {
    return 'Pirmasis parametras nera normalus skaicius.';
}

console.log(multiply(2, 3.5));
console.log(multiply(-2, 3.5));
console.log(multiply(2, -3.5));
console.log(multiply(-2, -3.5));

console.log(multiply(2, -Infinity));
console.log(multiply(-Infinity, 3.5));
console.log(multiply(-Infinity, -Infinity));
