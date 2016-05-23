function letter_count(str) {
    var result = {};
    var sortedResult = {};
    var words = str.split(' ');
    words.forEach(function(enteredWord) {
        for (var x = 0; x < enteredWord.length; x++) {
            if (!result.hasOwnProperty(enteredWord[x])) {
                result[enteredWord[x]] = 1;
            } else {
                result[enteredWord[x]]++;
            }
        }
    });
    Object.keys(result).sort().forEach(function(enteredWord) {
        sortedResult[enteredWord] = result[enteredWord];
    });
}

module.exports = letter_count;
