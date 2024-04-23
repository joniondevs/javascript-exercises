const add = function(a, b) {
	return parseInt(a) + parseInt(b);
};

const subtract = function(a, b) {
	return parseInt(a) - parseInt(b);
};

const sum = function(array) {
	if(array.length < 1){ return 0; }
  let sum = 0;
  for(i = 0 ; i < array.length; i++)
  {
    sum += array[i];
  }

  return sum;
};

const multiply = function(array) {
  
  let product = 1;
  array.forEach(element => {
    product *= element;
  });

  return product;
};

const power = function(a, pow) {
	return Math.pow(a, pow);
};

const factorial = function(num) {
	if(num < 0)
  { 
    return 0;
  }
  else if(num == 0 || num == 1)
  {
    return 1;
  }else
  {
    let result = 1;
    for(i = 1; i <= num; i++)
    {
      result *= i;
    }

    return result;
  }
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
