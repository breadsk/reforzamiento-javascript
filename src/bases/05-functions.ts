
function greet(name:string):string{
    return `Hola ${ name }`
}


const greet2 = (name:string) => {
    return `Hola ${ name }`
}

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


function getUser(){
    return {
        uid: 'ABC-123',
        username: 'zenakulee'
    }
}

const getUser2 = ():userInterface => ({
    uid: 'ABC-123',
    username: 'zenakulee'
});

const user = getUser()
console.log(user);

