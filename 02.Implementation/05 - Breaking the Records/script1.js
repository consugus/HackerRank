//Input
var n = 9; //number of games played
var s = [10, 5, 20, 20, 4, 5, 2, 25, 1]; //Score for each game

// var n = 10;                                    // Sample Input 2
// var s = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]; // Sample Input 2

//Solution

function getRecord(n, s){
    var highestScore = s[0];
    var lowestScore = s[0];
    highestScoreCount = 0;
    lowestScoreCount = 0;
    //console.log("S[0]: " + s[0] + "    highestScore: " + highestScore + "    lowestScore: " + lowestScore + "    highestScoreCount: " + highestScoreCount + "    lowestScoreCount: " + lowestScoreCount);
    for (var i = 1 ; i < n ; i++){
        if(s[i] > highestScore){
            highestScore = s[i];
            highestScoreCount++;
        }
        if(s[i] < lowestScore){
            lowestScore = s[i]
            lowestScoreCount++;
        }
        //console.log("S[" + i + "]: " +  + s[i] + "    highestScore: " + highestScore + "    lowestScore: " + lowestScore + "    highestScoreCount: " + highestScoreCount + "    lowestScoreCount: " + lowestScoreCount);

    }

    return highestScoreCount + " " + lowestScoreCount;
}




var retorno = getRecord(n, s);
