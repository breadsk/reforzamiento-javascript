

//&const myArray = [1,2,3,4,true,{}]

//Arreglo de numeros
//string o number
//const myArray = [1,2,3,'4',5,6]
const myArray:number[] = [1,2,3,4,5,6]
//const myArray3:(number | string)[] = [1,2,3,4,5,6]
//const myArray4 = []; -> Asi devuelve any

//Con esto puedo esparcir los valores que tengo
//en mi arreglo
//structuredClone(myArray) -> Para clonar arrays
const myArray2 = [...myArray];

myArray2.push(7);

console.log({  myArray , myArray2 });

//EL problema de esto es que lo suma cuando son numeros
//pero al ser string lo concatena
// for (const myNumber of myArray){
//     console.log(myNumber + 10);
// }
