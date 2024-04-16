const repeatString = function(string, num) {
    if(!isNaN(num) && num >= 0){
        let result = string.repeat(num);
        return result;
    }
    
    return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
