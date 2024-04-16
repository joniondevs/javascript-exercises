const reverseString = function(string) {
    const charArray = string.split("");
    const reversedCharArray = charArray.reverse();

    return reversedCharArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
