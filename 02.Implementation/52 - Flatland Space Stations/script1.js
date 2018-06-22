//Input
var firstLine = "5 2", secondLine = "0 4"; // 2
// var firstLine = "6 6", secondLine = "0 1 2 3 4 5"; // 0

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var nm = firstLine.split(" ").map( x => parseInt(x));
    var n = nm[0], m = nm[1];
    var c = secondLine.split(" ").map( x => parseInt(x));
    console.log(flatlandSpaceStations(n, c));
    return "Hola";
};


function flatlandSpaceStations(n, c) {
    var len = c.length;
    var maxDist = 0;



    return maxDist;
}
