/* 
let index = 0
while (index < 10) {
    console.log('EXECUTE');
    index = 15;
}
console.log('Index is ', index);
*/
let students = 20;

while (students > 0) {
    if (students % 2 == 0) {
        console.log('SORPRESA para estudiante', students);
    } else {
    console.log('Enviar correo a estudiante', students);
    }
    students = students - 1; //Resta los estudiantes para que la condición tenga un final
}