/* 
BOOLEAN - logine reiksme
- true
- false

Loginiai operatoriai:
&& - and (ir) (prioritetas, kaip ir daugyba)
|| - or (arba)

*/

const isEven = true;
const isOld = false;

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('||.......');
console.log(true || true);
console.log(true || true);
console.log(true || true);
console.log(true || true);

console.log(1, true && true || true); 
console.log(2, true && true || false);
console.log(3, true && false || true);
console.log(4, true && false || false);
console.log(5, false && true || true);
console.log(6, false && true || false);
console.log(7, false && false || true);
console.log(8, false && false || false);

console.log(1, true || true && true); 
console.log(2, true || true && false);
console.log(3, true || false && true);
console.log(4, true || false && false);
console.log(5, false || true && true);
console.log(6, false || true && false);
console.log(7, false || false && true);
console.log(8, false || false && false);

//ND: surasyti visas imanomas kombonasijos su && ie || kai yra naudojamos 4 boolean reiksmes

// ND: Kiek gavosi kombinaciju?

console.log(10, true && true && true && true); 
console.log(11, true && true && true && false); 
console.log(12, true && true && false && true); 
console.log(13, true && false && true && false); 
console.log(14, false && true && true && true); 
console.log(15, true && true && true || true);
console.log(16, true && true && true || false); 
console.log(17, true && true && false || true);
console.log(18, true && false && true || true);
console.log(16, false && true && true || true);


