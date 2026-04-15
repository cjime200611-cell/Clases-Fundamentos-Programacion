// Ejercicio 1

// Utilice loops para calcular la suma de cada digito de un número
// Por ejemplo: Para el número 364, la suma sería 3+6+4 = 13
// Otro ejemplo: Para el número 1252, la suma sería 1+2+5+2 = 10;

const number = 364; //Se ingresa el numero
let modi = number; //variable para que no modifique el numero original
let sum = 0; //Inicializar la suma en 0

while (modi > 0) {
    let digito = modi % 10; //Obtener el ultimo digito del numero
    sum += digito; // realiza la suma
    modi = Math.floor(modi / 10); //elimina el ultimo digito
}

console.log(`La suma de los dígitos del número ${number} es ${sum}`);