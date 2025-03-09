const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arrayOfNumbers){
  return arrayOfNumbers.reduce((total, num)=>total+num,0);
};

const multiply = function(arrayOfNumbers) {
  return arrayOfNumbers.reduce((total, num)=>total*num,1);
};

const power = function(num1, num2) {
	return num1**num2;
}; 

const factorial = function(num) {
	for(let i = num-1; i > 0; i--){
    num*=i;
  }
  if(num===0){
    num=1;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
