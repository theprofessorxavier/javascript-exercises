const fibonacci = function(position) {
    position = parseInt(position);
    let n1 = 0, n2 = 1, temp = 0;
    let answer = (position>=0)?0:"OOPS";
    for(let i=position-1; i>=0; i--){
        answer = temp = n2;
        n2 += n1;
        n1 = temp;
    }
    return answer;
};

// Do not edit below this line
module.exports = fibonacci;
