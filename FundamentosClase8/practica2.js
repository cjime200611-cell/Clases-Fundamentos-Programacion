const number = 6; //El imput
let cont = 1;
//El output
//Loggee la tabla de multiplicar para el numero "number"
while (cont < 11) {
    let multi = number * cont;
    console.log(number + 'x' + cont + '=' + multi);
    cont = cont + 1;
}