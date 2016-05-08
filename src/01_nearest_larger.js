
function nearestLarger(arr, i) {
  var i;
  var arr = [];
  var x = i + 1;
  //console.log('ehllo');
   for (var j = i - 1; j >= 0; i--) {
       if (arr[i] < arr[j]) {
           return j;
           console.log(j);
       } else if (arr[i] < arr[x]) {
           return x;
           console.log(x);
       }
       x++;
   }

}

module.exports = nearestLarger;
