//Input
var firstLine = "20 3 6 80"; // 6
var firstLine = "20 3 6 85"; // 7

retorno = eval(firstLine);

//Solution
function eval(firstLine){
    var pdms = firstLine.split(" ").map( x => parseInt(x) );
    var p = pdms[0], d = pdms[1], m = pdms[2], s = pdms[3];
    howManyGames(p, d, m, s);
    return "Hola";
};


function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    var numberOfGames = 0;


    return numberOfGames;
}
