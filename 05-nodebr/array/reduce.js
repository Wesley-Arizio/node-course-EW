// Reduce

const age = [10, 20, 30, 40, 50];

Array.prototype.myReduce = function (callback, initialValue){
    let finalValue = typeof initialValue !== undefined ? initialValue : this[0];
    // if the second parameter arrives, use it as a starting value; otherwise, use the index value 0
    this.map( value => {
        finalValue = callback(finalValue, value);
    });
    return finalValue;
}

const useReduce = () => {
    return age.reduce((prev, next) => {
        return prev + next;
    }, 0);
}

const useMyReduce = () => {
    return age.myReduce((prev, next) => {
        return prev + next;
    }, 0);
}

const useReduceFunction = useReduce();
const useMyfunction = useMyReduce();

console.log('Use Reduce: ', useReduceFunction);
console.log('Use My Reduce: ', useMyfunction);