//Input
var firstLine = "4 2"; var secondLine = "0 0 1 0"; // 98
var firstLine = "8 2"; var secondLine = "0 0 1 0 0 1 1 0"; // 92

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var nk = firstLine.split(" ").map( x => parseInt(x));
    var n = nk[0]; var k = nk[1];
    var c = secondLine.split(" ").map( x => parseInt(x) );

    console.log(jumpingOnClouds(c, k));
    return "Hola";
};


function jumpingOnClouds(c, k) {
    var answer = 0;


    return answer;
}
