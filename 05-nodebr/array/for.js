// manipulação de listas com for


const list = ['Jack', 'Daniels', 'Paulo', 'João', 'Marcos', 'Vinicius'];

const names = []

const getNames = () => {
    console.time('for')
        for(let i = 0; i <= list.length -1 ; i++){
            names.push(list[i]);
        }
    console.timeEnd('for')

    console.time('for-in')
        for(let i in list){
            names.push(list[i]);
        }
    console.timeEnd('for-in')

    console.time('for-of')
        for(name of list){
            names.push(name);
        }
    console.timeEnd('for-of')
}

getNames();
console.log("Names for",  names);