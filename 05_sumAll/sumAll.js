const sumAll = function(a, b) {
    let sum = 0;
    if(typeof a == "number" && a >= 0 && typeof b == "number" && b >= 0){
        let min = a <= b ? a : b;
        let max = a > b ? a : b;

        for(let i = min; i <= max; i++){
            sum += i;
        }
        
        return sum;
    }

    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
