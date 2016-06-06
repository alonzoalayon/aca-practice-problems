//var flatten = require('array-flatten');

function wonkyCoins(n) {

    //variables to be utilized to hold coins
    var valuedCoins = [];
    var zeroCoins = [];
    //if coin is 0
    if (n === 0) {
        return 1;
    }
    /*goes through coins and rounds down using
    floor.  Pushes to valuedCoins if not zero.*/
    for (var i = 2; i <= 4; i++) {
        var coinVal = Math.floor(n / i);
        if (coinVal > 0) {
            valuedCoins.push(coinVal);
        }
        else if (coinVal === 0) {
            zeroCoins.push(0);
        }
    }
    /*checks to see if valuedCoins is empty otherwise
    splices at first index with 1.*/
    if (valuedCoins.length === 0) {
        return zeroCoins.length;
    }
    else {
        return wonkyCoins(valuedCoins.splice(0, 1));
    }
}

module.exports = wonkyCoins;
