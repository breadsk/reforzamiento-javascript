
//Desarmar un elemento

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
    //rank: string | undefined;
}

const person:Hero = {
     name: 'Nicolas',
     age: 42,
     key: 'Ironman'
}

const { key , name: nombre , age } = person;


console.log({ nombre, age, key });

const useContext = ({key,name,age,rank = 'Sin rango'}: Hero) => ({
        keyName: key,
        user: {
            name,
            age,
        },
        rank:rank    
})


const { rank , keyName , user: { name } } = useContext(person);

console.log({ rank , keyName });

//Evitar la desestructuracion anidada

// const {rank,keyName,nombre} = useContext(person)

// console.log({rank,keyName,name});

// const {name , age , key} = person;

// const name = person.name;
// const age = person.age;
// const key = person.key;

