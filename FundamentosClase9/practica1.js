//Codifique un programa que verifique
//si una palabra es palindromo 

//Input
const word = 'reconocer'
let wordReversed = "";

//Output
// -> La palabra ${word} es un palindromo
// -> La palabra ${word} no es un palindromo
for (let letra = word.length - 1; letra >= 0; letra--) {
    wordReversed = wordReversed + word.charAt(letra);
}
console.log(wordReversed);

if (word === wordReversed) {
    console.log(`La palabra ${word} SI es un palindromo`);
} else {
    console.log(`La palabra ${word} NO es un palindromo`);
}