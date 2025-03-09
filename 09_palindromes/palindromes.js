const palindromes = function (string) {
    let original = reversed = string
    .toLowerCase()
    .split('')
    .filter((letter)=>letter!=' '&&
                      letter!=','&&
                      letter!='!'&&
                      letter!='?'&&
                      letter!='.');
    original = original.join('');
    reversed = reversed.reverse().join('');
    return original === reversed;
};

// Do not edit below this line
module.exports = palindromes;
