/*Escriba un programa que compute si un número está dentro del rango de 10 - 20 o dentro del rango de 40 - 60
El programa debe calcular un booleano y loggear el resultado.

Pasos:
1. Crear una variable "number" con un número entre 0 y 100.
2. Crear una variable "result" que deberá calcular si ese número está dentro de alguno de los rangos de 10 - 20 o de 40 - 60
3. Si está dentro de cualquiera de los dos rangos, esta variable "result" será true, si está fuera de ambos rangos, será false
4. Loggear el resultado de esta forma: "El cálculo de rangos para el número {number} es: {result}"

Ejemplos:
- Cuando number es 15, el log debe decir: "El cálculo de rangos para el número 15 es: true"
- Cuando number es 32, el log debe decir: "El cálculo de rangos para el número 32 es: false"
- Cuando number es 59, el log debe decir: "El cálculo de rangos para el número 59 es: true"
*/


true || false
const number = 60;
const result = (number >= 10) && (number <= 20) || (number >= 40) && (number <= 60);
console.log('El cálculo de rangos para el número ' + number + ' es: ' + result);