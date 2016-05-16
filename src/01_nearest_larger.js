function nearestLarger(arr, i) {

  //oneOff digit
  var oneOff = 1;
  
  //right variable
  var x = i;

  //left variable
  var j = i;

  while (j >= 0 || x < arr.length) {
    j = i - oneOff;
    x = i + oneOff;
    if (j >= 0 && arr[j] > arr[i]) {
      return j;
    } else if (x < arr.length && arr[x] > arr[i]) {
      return x;
    }

    oneOff += 1;
  }

  return null;

}

module.exports = nearestLarger;
