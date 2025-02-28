const sumAll = function(num1, num2) {
    let result = biggest = smallest = 0;
    if(check(num1, num2) === true){
        if(num1>num2){
            biggest = num1;
            smallest = num2;
        }else{
            biggest = num2;
            smallest = num1;
        }
        let range = biggest - smallest;
        for(i=0;i<=range;i++){
            result+=smallest;
            smallest++;
        }
    }else{
        result = 'ERROR';
    }

    return result;
};

function isNotDecimal(num){
    let check = Math.ceil(num*10)%10;
    return (check===0)?true:false;
}

function isNotNegative(num){
    return num>=0?true:false;
}

function isNumber(num){
    return (typeof num === 'number')?true:false;
}

function check(num1, num2){
    let decimalCheck = isNotDecimal(num1) && isNotDecimal(num2);
    let negativeCheck = isNotNegative(num1) && isNotNegative(num2);
    let numberCheck = isNumber(num1) && isNumber(num2);
    return decimalCheck && negativeCheck && numberCheck;
}
// Do not edit below this line
module.exports = sumAll;
