const removeFromArray = function(array, ...args) {
    let elementRemoved = array;
    for(let arg of args){
        for(let i=array.indexOf(arg);i<array.length;){
            if(array[i] === arg){
                elementRemoved.splice(i, 1);
                i=0;
            }else{
                i++;
            }
        }
    }
    return elementRemoved;
};

// Do not edit below this line
module.exports = removeFromArray;
