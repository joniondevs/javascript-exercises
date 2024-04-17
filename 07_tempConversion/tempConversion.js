const convertToCelsius = function(degrees) {
  if(typeof degrees == "number"){
    let celcius = (degrees -32) * (5/9);

    return Math.round((celcius * 10)) / 10;
  }

  return "ERROR"
};

const convertToFahrenheit = function(degrees) {
  if(typeof degrees == "number")
  {
    let fahrenheit = degrees * (9/5) + 32;
    return Math.round(fahrenheit * 10) / 10; 
  }

  return "ERROR"
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
