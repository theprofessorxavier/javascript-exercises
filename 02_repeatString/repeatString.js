const repeatString = function(string, numOfRepeats) {
    let result = "";
    for(let i = numOfRepeats; i > 0; i--){
        result+=string;
    }
    result = numOfRepeats<0?"ERROR":result;
    return result;
};

// Do not edit below this line
module.exports = repeatString;
