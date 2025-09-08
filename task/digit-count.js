function digitCount(n) {
    if (typeof n !== 'number') {
        return "Reikalingas skaicius.";
    }
//v1
    if (n === Infinity || n === -Infinity || isNaN(n)) {
        return "Reikalingas normalus skaicius.";
    }
//v2
    if (!isFinite(n)) {
        return "Reikalingas normalus skaicius.";
    }
//
const numberAsString = '' + n;
let count = numberAsString.length;

if (n % 1 !== 0) {
    count--;
}
if (n < 0) {
    count--;
}

return count;
}

console.log(digitCount());
console.log(digitCount(undefined));
console.log(digitCount('asfdg'));
console.log(digitCount(null));

console.log(digitCount(Infinity));
console.log(digitCount(-Infinity));
console.log(digitCount(NaN));

console.log(digitCount(5), '-->', 1);
console.log(digitCount(159), '-->', 3);
console.log(digitCount(256156), '-->', 7);
console.log(digitCount(25615613585569), '-->', 9);

