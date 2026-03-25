/* -------------------
    Declaración Var
-------------------- */
const age = 15;
const hasCoupon = false;
const couponDiscount = 0;
const hasStudentId = true;
const baseprice = 5000;
let = price = baseprice;
const respuesta = 'El precio de su tiquete es';

/* ------------------
        Código
------------------- */

if (age <= 12) {
    price = 'gratis'; //Reasignarle un valor a la variable para el caso de menores de edad
    console.log(respuesta, price);
} else {
    let discounts = []; //Un array para almacenar los datos
    if (age >= 65) {
        discounts.push(0.40); // El .push sirve para agregarle un nuvo valor a la variable
    } else if (hasStudentId === true) {
        discounts.push(0.25);
    } else if (hasCoupon === true) {
        discounts.push(couponDiscount / 100);
    }
    const maxdiscount = Math.max (...discounts); //Se usa la libreria de matematicas el Math.max para saber cual descuento es el mayor.
    price = baseprice * (1 - maxdiscount);
    console.log (respuesta, Math.round(price)); //El Math.round se utiliza aqui para redondear el resultado.
}