const convertToCelsius = function(celsiusValue) {
  const celsiusToFarenheit = (celsiusValue - 32) * (5/9);
  return Math.round(celsiusToFarenheit,1);
};

const convertToFahrenheit = function(farenheitValue) {
  const farenheitToCelsius = (farenheitValue * (9/5)+ 32);
  return Math.round(farenheitToCelsius, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
