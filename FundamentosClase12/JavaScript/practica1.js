//Input
const list = [32, 87, 999, 1777232, 1, 54, 111];
list.push(40, 35, 56); //Se le agregan otros numeros
//Output
//-> Pares: [32, 1777232, 54];
//-> Impares: [87, 999, 1, 111];
let listPares = [];
let listImpares = [];

for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
        listPares.push(list[i]); //Para que no tome la posición hay que poner el nombre de la lista y la i
    } else {
        listImpares.push(list[i]);
    }
}
console.log(`Los numeros pares son: ${listPares.join(' - ')}`);
console.log(`Los numeros impares son: ${listImpares.join(' - ')}`);