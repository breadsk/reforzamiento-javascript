

/**
 * Esto es importante , al realizar una variable const el dato a retornar
 * es el valor que le damos, es una contante, no cambia.
 * El ser let si me retorna el tipo , porque puede cambiar
 */


const firstName:string = 'Nicolas';
let lastName = 'Caceres';

let diceNumber = 6;
diceNumber = 3;

const containsLetterH = lastName.includes('c');

console.log({containsLetterH , diceNumber , firstName , lastName});

//console.log(firstName, lastName);