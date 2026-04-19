//Array
const list = ['manzana', 'pera', 'uva', 'piña'];
const randomList = ['pera', 32, false, ['uvas']];
const empty = [];

//Acceder a los elementos de un Array
const fruit = list[2];
console.log(list.length);
console.log(fruit);

//Agregar elementos a la lista
list.push('naranja');
list.push('tomate');
// console.log(list);

//Eliminar elementos a la lista
list.splice(2, 1); //Ocupa la posición del elemento que se quiere eliminar y cuantos elementos.
console.log(list);

// Loops
for(let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

//Divide letras o numeros y si hay comas de por medio es como una barrera.
// console.log(HOLA.split('')); 

//Devuelve el ultimo elemento (lo muestra o no)
console.log(list.pop()); //cuando se hace dentro del mismo console solo muestra el ultimo
console.log(list); //Cuando se hace por aparte lo quita

//Devuelve el primer elemento (lo muestra o no)
console.log(list.shift()); //cuando se hace dentro del mismo console solo muestra el ultimo
console.log(list); //Cuando se hace por aparte lo quita

//Otros metodos de recorrer Array

//.map - es como el for, recorre el Array
const list2 = [32, 87, 999, 1777232, 1, 54, 111];
list2.map(function(elemento) {
    console.log(elemento);
}); //Lo llama por cada elemento que recorre, lo retorna como un for

const list2modificada = list2.map(function(elemento) {
    return elemento + 1;
});
console.log(list2modificada);

//.filter - filtra la lista y elimina ciertos elementos, se puede hacer con un for
const listaReducida = list2.filter(function(elemento) {
    return elemento > 100;
});