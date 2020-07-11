// Map

const list = ['Jack', 'Daniels', 'Paulo', 'João', 'Marcos', 'Vinicius'];

Array.prototype.myMap = function (callback) {
    const arrayMap = [];
    for(let i = 0; i < this.length - 1; i++){
        const data = callback(this[i], i);
        arrayMap.push(data);
    }
    return arrayMap;
}

const useMap = () => {
    return list.map(name => name);
}

const useMyMap = () => {
    return list.myMap(name => name);
}

const useMapFunction = useMap();
const myMap = useMyMap();

console.log("Map JS: ", useMapFunction );
console.log("My map JS: ", myMap );