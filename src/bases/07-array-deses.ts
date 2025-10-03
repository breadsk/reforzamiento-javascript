

const characterNames = ['goku','trunks','vegeta','picoro'];

const [, p2 ] = characterNames;

console.log({p2});

//Retorna un arreglo, un string o un numero
const returnsArrayFn = () => {
    return ['ABC' , 123] as const;
}

const [ letters , numbers ] = returnsArrayFn();

console.log(numbers + 1);
console.log(letters + "D");