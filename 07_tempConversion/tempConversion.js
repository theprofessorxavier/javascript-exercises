const convertToCelsius = function(fahrenheit) {
  const fiveDividedByNine = 5/9;
  let result = (fahrenheit-32) * fiveDividedByNine;
  return (isNotDecimal(result))?
          result:
          parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  const nineDividedByFive = 9/5;
  let result = celsius * nineDividedByFive + 32;
  return (isNotDecimal(result))?
          result:
          parseFloat(result.toFixed(1));
};

function isNotDecimal(num){
  let check = Math.ceil(num*10)%10;
  return (check===0)?true:false;
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
