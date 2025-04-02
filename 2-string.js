/* 
STRING- tekstas, simboliu grandinele

Tekstines reiksmes iniciavimas:
- ' (vienguba kabute)
- " (dviguba kabute)
- ` (backtick)

Specialieji simboliai:
- \ (privercia sekanti simboli buti spausdintinu)
- \r (return, kursorius grizta i eilutes pradzia)
- \n (new line, kursorius viena eilute zemyn)
- \t (tab)

*/

const a = 'Labas';
console.log(a);

let b = 'rytas';
console.log(b);

b= 'diena';
console.log(b);

const naame = "Jonas"; 

//Vienguba (') kabute.
const k1 = "Vienguba (') kabute.";
console.log(k1);

//Dviguba (") kabute.
const k2 = 'Dviguba (") kabute.';
console.log(k2);

// Vienguba (') ir dviguba (") kabutes.
const k12 = "";

const name = "Jonas";
const surname = "Jonaitis";

const fullname = name + ' ' + surname;
console.log(fullname);


// Vienguba (') ir dviguba (") kabutes.
const k13 = "Vienguba (') ir" + 'dviguba (") kabutes.';
console.log(k13);


//Vienguba (') kabute.
const k3 = 'Vienguba (\') kabute.';
console.log(k3);

//Dviguba (") kabute.
const k4 = "Dviguba (\") kabute.";
console.log(k4);


// Vienguba (') ir dviguba (") kabutes.
const k5 = 'Vienguba (\') ir dviguba (") kabutes.';
const k6 = "Vienguba (') ir dviguba (\") kabutes.";
console.log(k5);
console.log(k6);

const backSlash1 = '\\';
const backSlash2= "\\";
console.log(backSlash1);
console.log(backSlash2);


/*
<header>
   <img>
   <nav>
         <a></a>
         <a></a>
         <a></a>
   </nav>
  </header>
  */


 const studentName = 'Maryte';
 const amount = 4;
 // Maryte yra viena is 4 legendiniu studentu.
 const student = studentName + 'yra viena is' + amount + 'legendiniu studentu';

 console.log(student);


//Vienguba (') kabute.
 const b1 = `Vienguba (') kabute.`;
 console.log(b1);

 // Backtick (`) kabute.

 const b2 = `Bactick (\`) kabute.`;

 const b7 =  ` <header>
    <img>
    <nav>
          <a></a>
          <a></a>
          <a></a>
    </nav>
   </header>`;
   console.log(b7);

 const studentName1 = 'Maryte';
 const amount1 = 4;
