const phi = (1 + Math.sqrt(5)) / 2;
const fibonacci = function(member) {
    
    let n = parseInt(member);
    if(typeof n == "number" && n >= 0)
    {
        return Math.round((Math.pow(phi, n) - Math.pow(-phi, -n)) / Math.sqrt(5));
    }

    return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
