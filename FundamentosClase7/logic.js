/* AND 
console.log((5 == 5) && (3 != 3));
// OR
console.log((5 == 5) || (3 != 3));
*/

//Escribir un programa que nos diga si
//podemos conducir o no

const age = 19; //Numero entre 0-100
const hasLicence = true; //Boolean true-false

function answerYes() { console.log('SI PUEDES CONDUCIR')}

// Usando operadores logicos, llame la funcion answerYes
// cuando la persona es mayor de 18 y sí tiene licencia
// la funcion se llama de esta forma: answerYes()

(age >= 18 && hasLicence == true) && answerYes();
