//Input
var firstLine = "6"; var secondLine = "7 1 3 4 1 7"; // 3

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var a = secondLine.split(" ").map( x => parseInt(x) );

    console.log(minimumDistances(a));
    return "Hola";
};


function minimumDistances(a) {
    var minDist = 0, len = a.length;


    return minDist;
}
