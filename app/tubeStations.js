// App/tubeStations.js

function findMinStationNamesThatCoverAllLettersOfAlphabet(stations) {
    var alphabets26 = 'abcdefghijklmnopqrstuvwxyz';
    var namesMinusDupLetters = [];

/* In the list find a word that contains the most letters of alphabet without duplicates. 
*/
for (var i = 0; i < stations.length; i++) {
  var removeDupLetters = stations[i].toLowerCase().replace(/[&.'-]/g, '') //REGex that omitts simbolos. 
    .split('')
    .filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join('');
   namesMinusDupLetters.push(removeDupLetters);
}
/*Create the sets with names of size 5*/
var icountLetters = 0;
var allCountLetters = [];
  for(var i = 0; i <= namesMinusDupLetters.length - 1 ; i++) {
    for (var j = 0; j <= namesMinusDupLetters.length - 1; j++) {
     for (var k = 0; k <= namesMinusDupLetters.length - 1; k++) {
      for(var l = 0; l <= namesMinusDupLetters.length  -1; l++) {
        for(var m = 0; m <= namesMinusDupLetters.length - 1; m++) {
           var subsetsOfFiveWords = namesMinusDupLetters[i] + ' + ' + namesMinusDupLetters[j]  + ' + ' + namesMinusDupLetters[k] +  ' + ' +namesMinusDupLetters[l] + ' + ' +namesMinusDupLetters[m];;;        
        if((i == j) || (i ==k) || (i == l) || (i == m) || (j == k) || (j == l) || (j == m) || (k == l) || (k == m) || (l == m)) {
          console.log('skipping if two indices are the same');
        } else {
          for (var a = 0; a < alphabets26.length; a++) {
        
        var letter = alphabets26[a];
        if(subsetsOfFiveWords.indexOf(letter) > -1) icountLetters++
      }if(icountLetters === 26) {
        var numOfStations = subsetsOfFiveWords.split('+').length;
        var answerMessage = subsetsOfFiveWords + ' has ' + icountLetters + ' letters' + ' in ' + numOfStations + ' stations';               
                    return answerMessage;
                  }
      // reset counter
      icountLetters = 0;
        }
        }
      }
      }
    }
  }
}
module.exports.findAllLetersOfAlphabetWithMinStationNames = findMinStationNamesThatCoverAllLettersOfAlphabet;