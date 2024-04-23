const palindromes = function (str) {
    let punctuation =/[\.\s+,?!:;]/g;
    
    // clean string not to have any punctuation or spaces.
    str = str.toLowerCase()
    .replace(punctuation,"")
    
    let letters = str.split("");
    let reversed = letters.reverse().join("");

    return str === reversed;
};

// Do not edit below this line
module.exports = palindromes;
