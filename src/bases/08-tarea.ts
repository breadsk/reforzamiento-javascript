

const useState = (value:string) => {
    
    return [
        value , 
        ( newValue:string  ) => {
            console.log(newValue);
    },
    ] as const;
}


const [ name , setName ] = useState('Nicolas')
console.log(name);
setName('Vladimir')