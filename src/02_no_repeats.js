function noRepeats(yearStart, yearEnd) {
  var years =[];
 var testYear =+yearStart;
  var yearsDifference = +(yearEnd-yearStart);
 for(var i=0; i<=yearsDifference; i++){
     if(noRepeat(testYear)){
           years.push(testYear);
     }
     testYear++;
 }
return years;
}
function noRepeat(year){
     var string = year.toString().split("").sort();
     for(var i=0; i<string.length; i++){
         if(string[i]===string[ i + 1 ]){
             return false;
         }
     }
         return true;
     }
module.exports = noRepeats;
