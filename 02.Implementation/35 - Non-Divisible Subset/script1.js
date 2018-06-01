//Input
var firstLine = "4 3"; var secondLine = "1 7 2 4"; // 3

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var nk = firstLine.split(" ").map( x => parseInt(x) );
    var n = nk[0], k = nk[1];
    var S = secondLine.split(" ").map( x => parseInt(x) );
    console.log( nonDivisibleSubset(k, S) );
    return "Hola";
};


function nonDivisibleSubset(k, S) {
    console.log("k: " + k + "\tS: " + S);

    return 0;
}
