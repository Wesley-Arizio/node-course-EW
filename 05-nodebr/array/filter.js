// Filter

const list = ['Jack', 'Daniels', 'Paulo', 'João', 'Marcos', 'Vinicius'];


Array.prototype.myFilter = function (callback) {
    const list = []

    for( name of this){
        const names = callback(name);

        if(!names)continue;

        list.push(name);
    }
    return list;
}


const getUserByName = (initial) => {
    return list.filter( (name) =>   name.toLowerCase().indexOf(initial) !== -1);
}

const useMyFilter = (initial) => {
    return list.myFilter((name) =>   name.toLowerCase().indexOf(initial) !== -1);
}

const filterFunction = getUserByName('j');
const myFunction = useMyFilter('s');

console.log("Array filter: ", filterFunction);
console.log("My filter: ", myFunction);