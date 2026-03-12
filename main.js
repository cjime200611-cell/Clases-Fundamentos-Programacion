const expresion1 = 5 > 10;
console.log(expresion1);

const expresion2 = 3 < 10;
console.log(expresion2);

const expresion3 = 2 == 2;
console.log(expresion3);

const expresion4 = 3 != 3;
console.log(expresion4);

// True && True
console.log('TRUE&&TRUE', expresion2 && expresion3);

//False && True
console.log('FALSE&&TRUE', expresion1 && expresion3);

//TRUE && FALSE 
console.log('TRUE&&FALSE', expresion3 && expresion1);

//FALSE && FALSE
console.log('FALSE&&FALSE', expresion4 && expresion1);

//TRUE || TRUE
console.log('TRUE||TRUE', expresion2 || expresion3);

//FALSE || TRUE
console.log('FALSE||TRUE', expresion1 || expresion3);

//TRUE || FALSE
console.log('TRUE||FALSE', expresion3 || expresion1);

//FALSE || FALSE
console.log('FALSE||FALSE', expresion4 || expresion1);
