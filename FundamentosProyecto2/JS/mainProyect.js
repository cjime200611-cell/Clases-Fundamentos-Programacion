const cantidadDeClientes = 25;
let total = 0; //Inicializado en 0

for (let cliente = 1; cliente <= cantidadDeClientes; cliente++) {
    let tiempoCliente = 0; //Inicializado en 0
    //Reglas Principales
    if (cliente % 2 === 0) {
        tiempoCliente += ((cliente*60) + 45); //Multiplicar * 60 para hacer la converción de minutos a segundos
    } else {
        tiempoCliente += 20; //+= para sumar y guardar el resultado de forma corta
    }

    //Reglas Extras
    if (cliente % 10 === 0) {
        tiempoCliente += ((18*60) + 11);
    } //Multiplo de 10

    if (cliente % 5 === 0) {
        tiempoCliente += (37*60);
    } //Multiplo de 5

    total += tiempoCliente; //Para que vaya sumandoy almacenando las horas totales
}

let horas = Math.floor(total / 3600); //Math.floor es para que elimine los decimales
let resto = (total % 3600);
let minutos = Math.floor(resto / 60); //Math.floor es para que elimine los decimales
let segundos = (resto % 60);

//Una condicional para que solo ponga la cantidad que corresponde, cuando posea o no horas o minutos
if (horas > 0) {
    console.log(`A el cajero le va a tomar ${horas} horas, ${minutos} minutos y ${segundos} segundos`);
} else if (minutos > 0) {
    console.log(`A el cajero le va a tomar ${minutos} minutos y ${segundos} segundos`);
} else {
    console.log(`A el cajero le va a tomar ${segundos} segundos`);
}


