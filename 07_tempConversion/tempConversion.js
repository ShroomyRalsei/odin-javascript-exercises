const convertToCelsius = function(celsiusValue) {
  const celsiusToFarenheit = (celsiusValue - 32) * (5/9);
  return Math.round(celsiusToFarenheit * 10) / 10;
};

const convertToFahrenheit = function(farenheitValue) {
  const farenheitToCelsius = (farenheitValue * (9/5)+ 32);
  return Math.round(farenheitToCelsius * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
