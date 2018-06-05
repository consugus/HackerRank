//Input
var firstLine = "7"; var secondLine = "0 0 1 0 0 1 0"; // 4
// var firstLine = "6"; var secondLine = "0 0 0 0 1 0"; // 3

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var c = secondLine.split(" ").map( x => parseInt(x));

    console.log(jumpingOnClouds(c));
    return "Hola";
};


function jumpingOnClouds(c) {
    var len = c.length, jumps = 0;


    return jumps;
}
