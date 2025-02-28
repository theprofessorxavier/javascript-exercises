const reverseString = function(string) {
    let stringToArray = string.split("");
    let revString = "";
    for(let i=(string.length-1);i>=0;i--){
        revString+=stringToArray[i];
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
