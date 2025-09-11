const day = 1;
let dayName = '';

if(day === 1) {
    dayName = 'pirmadienis';
} else if (day === 2) {
    dayName = 'antradienis';
} else if (day === 3) {
    dayName = 'treciadienis';
} else if (day === 4) {
    dayName = 'ketvirtadienis';
} else if (day === 5) {
    dayName = 'penktadienis';
} else if (day === 6) {
    dayName = 'sestadienis';
} else if (day === 7) {
    dayName = 'sekmadienis';
} else {
    `tokios dienos nera.`
}
console.log(dayName);

const d = 6;
let weekdayName = '***';

switch (d) {
    case 1:
        weekdayName = 'pirmadienis';
        break;
    case 2:
        weekdayName = 'antradienis';
        break;
    case 3:
        weekdayName = 'treciadienis';
        break;
    case 4:
        weekdayName = 'ketvirtadienis';
        break;
    case 5:
        weekdayName = 'penktadienis';
        break;
    case 6:
        weekdayName = 'sestadienis';
        break;
    case 7:
        weekdayName = 'sekmadienis';
        break;
    default:
        weekdayName = 'tokios dienos nera.';
        break;
}
console.log(weekdayName);

const day2 = 4;
let day2Name = '';

if (day2 === 1 || day2 === 2 || day2 === 3 || day2 === 4 || day2 === 5) {
    day2Name = 'darbo diena';
} else if (day2 === 6 || day2 === 7) {
    day2Name = 'savaitgalis';
} else { day2Name = `tokios dienos nera.`;

}
console.log(day2Name);


const day3 = 6;
let day3Name = '';

switch (day3) {
    case 1:
    case 1:
    case 1:
    case 1:
    case 5:
        day3Name = 'darbo diena';
        break;
    case 6:
    case 7:
        day3Name = 'savaitgalis';
        break;
    default:
        day3Name = `tokios dienos nera`;   
        break;              
}
console.log(day3Name);

