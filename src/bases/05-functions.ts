
function greet(name:string):string{
    return `Hola ${ name }`
}


const greet2 = (name:string) => `Hola ${name}`;


//En cambipo esto te arroja el error de inmediato
// greet2 = () => {
//     console.log("Hola");
// }


//Con esto solo me arroja una advertencia en ts
// greet = function(){
//     console.log("Hola");
// }

// greet()

//

const message = greet('Nicolas');
const message2 = greet2('Vladimir');


console.log(message);
console.log(message2);

interface userInterface {
    uid:string;
    username:string;
}

//Con esto tengo un return implicito
const getUser = ():userInterface => ({
    uid: 'ABC-123',
    username: 'zenakulee',
})


// function getUser(){
//     return {
//         uid: 'ABC-123',
//         username: 'zenakulee'
//     }
// }

// const getUser2 = ():userInterface => ({
//     uid: 'ABC-123',
//     username: 'zenakulee'
// });

// const user = getUser()
// console.log(user);



const myNumbers: number[] = [1,2,3,4,5];

// myNumbers.forEach((value)=> {
//     console.log(value);
// })
//myNumbers.forEach(console.log)
myNumbers.forEach((value,index,arr) => {
    console.log(value + " " + index + " " + arr);    
});