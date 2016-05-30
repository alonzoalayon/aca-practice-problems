function orderedVowel(str) {
    //split word
    var wordArray = str.split(" ");
    //hold vowels
    var correctVowels = [];
    for (var i = 0; i < wordArray.length; i++) {
        if (isItOrdered(wordArray[i])) {
            correctVowels.push(wordArray[i]);
        }
    }
    return correctVowels.join(" ");
}

//helper function
function isItOrdered(string) {
    //array of ordered vowels
    var re = /[aeiou]/i;
    var vowels = [];
    var sorted = [];
    //check if string matches orderered vowels
    for (var i = 0; i < string.length; i++) {
        if (string[i].match(re)) {
            vowels.push(string[i]);
            sorted.push(string[i]);
        }
    }

    sorted.sort();
    if (sorted.toString() === vowels.toString()) {
        return true;
    } else {
        return false;
    }
}

module.exports = orderedVowel;
