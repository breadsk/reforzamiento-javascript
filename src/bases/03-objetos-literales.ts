
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman:Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    // address: {
    //      postalCode: 'ABC-123',
    //      city: 'New York'
    // },
}

const spiderman: Person = {
    firstName: "",
    lastName: "",
    age: 0
}

console.log(ironman);

//Apunta al mismo espacio en memoria
//No se debe hacer
//const spiderman = ironman;

//Esto si , con esto le digo que tome las properties que
//estan en ironman y las esparsa en spiderman
//Esto rompe la referencia al primer nivel
//const spiderman = {  ...   ironman };

//Si queremos construir un clon
// const spiderman = structuredClone(ironman);

// ironman.firstName = 'Peter';
// ironman.lastName = 'Parker';
// ironman.age = 22

// console.log(ironman,spiderman);