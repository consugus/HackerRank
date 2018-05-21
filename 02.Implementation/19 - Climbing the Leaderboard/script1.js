//Input
var firstLine = "7"; var secondLine = "100 100 50 40 40 20 10"; var thirdLine = "4"; var fourthLine = "5 25 50 120";
// 6 4 2 1

retorno = eval(secondLine, fourthLine);

//Solution
function eval(secondLine, fourthLine){
    var scores = secondLine.split(" ").map( x => parseInt(x));
    var alice = fourthLine.split(" ").map( x => parseInt(x));

    console.log(climbingLeaderboard(scores, alice));
    return "Hola";
};


function climbingLeaderboard(scores, alice) {

    console.log(1);
}
