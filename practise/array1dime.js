//using array find max value

function higestscore(scores) {
  var max = scores[0];
  for (var x = 1; x < scores.length; x++) {
    if (max > scores[x]) {
      max = max;
    } 
    else {
      max = scores[x];
    }
    
  }
  return max;
}

var scores = [21, 20, 15, 88, 28];
var maxscore = higestscore(scores);
console.log(maxscore);
