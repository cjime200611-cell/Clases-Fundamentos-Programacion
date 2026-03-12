if (5 == 5 && 4 < 10 && 3 != 7) {
    console.log('La condición es cierta');
} else {
    console.log('La condición es falsa');
}

//Creemos estas variables:
const userName = 'user0001'; //Cualquier string
const userpassword = '1234'; //Cualquier string
const savedPassword = '1234'; //NO CAMBIA
const userAnswer = 'Molly'; //Cualquier string
const savedAnswer = 'Sally'; //NO CAMBIA

// 1. Si el userName no es user0001 
// -> Su userName no existe
// 2. Si el userName si es user001 y el password hace match
// -> Puede iniciar sesión
// 3. Si los passwords NO hacen match, pero los answer SI hacen match
//-> Puede iniciar sesion
// 4. Si nada hace match (Password ni Answer)
//-> NO puede iniciar sesion

if (userName != 'user0001') {
    console.log('Su userName no existe');
} else if(userName == 'user0001') {
    console.log('Puede iniciar sesion');
} else if((userName == 'user0001') && (userpassword == '1234')){
    console.log('Puede iniciar sesión')
} else if((userpassword != '1234') && (savedAnswer == 'Sally')) {
    console.log('Puede inciar sesión');
} else if((userAnswer != 'Molly') && (savedAnswer != 'Sally')){
    console.log('NO puede iniciar sesión');
}




