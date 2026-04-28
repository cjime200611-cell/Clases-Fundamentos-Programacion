// Input
// Una lista que contiene pares de nombres y números:
const list = ['Ana', 88, 'Carlos', 76, 'Karina', 63];
// const list = ['Manuel', 54, 'Lisa', 93, 'Daniel', 97, 'Maribel', 61];
let listaprobados = []; //Lista vacia para aprobados
let listnoaprobados = []; //Lista vacia para los no aprobados
let calificacionsumada = 0; //La suma de las calificaciones inicializada en 0
let listcalificaciontrans = []; //Lista vacia para las calificaciones con letras

for (let index = 0; index < list.length; index+=2) {
    const nombres = list[index]; //Variable de nombres
    const notas = list[index + 1]; //Variable de notas que suma una pocision adelante para almacenar los numeros

    calificacionsumada += notas; //Vaya sumando las notas

    if (notas >= 70) {
        listaprobados.push(nombres); //Empuja los nombres de los estudiantes que tienen notas mayor a 70 a la lista de aprobados
    } else {
        listnoaprobados.push(nombres); //Empuja los nombres de los estudiantes que tienen notas menor a 70 a la lista de no aprobados
    }

    let letra = ''; //Variable vacia
    if (notas >= 95) {
        letra = 'A';
    } else if (notas >= 90) {
        letra = 'B';
    } else if (notas >= 80) {
        letra = 'C';
    } else if (notas >= 70) {
        letra = 'D';
    } else {
        letra = 'F';
    }

    listcalificaciontrans.push(nombres, letra); //Empuja nombre y en vez de nota empuja el numero que corresponda
    console.log (`La calificación de ${nombres} es ${letra}`); //La calificación con letra de cada estudiante
}

//Output
const promedio = (calificacionsumada / (list.length/2)).toFixed(2); //toFixed - sirve para declarar cuantos decimales mostrará
console.log (`El promedio de calificaciones es: ${promedio}`);
console.log(`Los estudiantes que aprobaron son: ${listaprobados.join(', ')}`); //.join - Para declarar como separar cada objeto
console.log(`Los estudiantes que no aprobaron son: ${listnoaprobados.join(', ')}`);
console.log(`La lista transformada es: ${listcalificaciontrans.join(', ')}`);