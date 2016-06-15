//grabs sentence and splits it
function morseEncode(n){
     var sentence = n.split(" ");
     var array =[];
     //puts letters into an array that runs encoder function
     for(var i=0; i<sentence.length; i++){
         array.push(encoder(sentence[i]));
        }
         return array.join(" ");
}

//helpder function that goes through each letter.
function encoder(word){
    var letter = word.split("");
    var morseWord = [];
    for (var i=0; i<letter.length; i++){
        if (letter[i]==="a"){
            morseWord.push(".- ")
        }
        if (letter[i]==="b"){
            morseWord.push("-...")
        }
        if (letter[i]==="c"){
            morseWord.push("-.-. ")
        }
        if (letter[i]==="d"){
            morseWord.push("-..")
        }
        if (letter[i]==="e"){
            morseWord.push(".")
        }
        if (letter[i]==="f"){
            morseWord.push("..-.")
        }
        if (letter[i]==="g"){
            morseWord.push("--.")
        }
        if (letter[i]==="h"){
            morseWord.push(".... ")
        }
        if (letter[i]==="i"){
            morseWord.push(".. ")
        }
        if (letter[i]==="j"){
            morseWord.push(".---")
        }
        if (letter[i]==="k"){
            morseWord.push("-.-")
        }
        if (letter[i]==="l"){
            morseWord.push(".-..")
        }
        if (letter[i]==="m"){
            morseWord.push("--")
        }
        if (letter[i]==="n"){
            morseWord.push("-.")
        }
        if (letter[i]==="o"){
            morseWord.push("---")
        }
        if (letter[i]==="p"){
            morseWord.push(".--.")
        }
        if (letter[i]==="q"){
            morseWord.push("--.-")
        }
        if (letter[i]==="r"){
            morseWord.push(".-.")
        }
        if (letter[i]==="s"){
            morseWord.push("...")
        }
        if (letter[i]==="t"){
            morseWord.push("-")
        }
        if (letter[i]==="u"){
            morseWord.push("..-")
        }
        if (letter[i]==="v"){
            morseWord.push("...- ")
        }
        if (letter[i]==="w"){
            morseWord.push(".-- ")
        }
        if (letter[i]==="x"){
            morseWord.push("-..- ")
        }
        if (letter[i]==="y"){
            morseWord.push("-.-- ")
        }
        if (letter[i]==="z"){
            morseWord.push("--.. ")
        }
    }
    return morseWord.join("");
}
module.exports = morseEncode;
