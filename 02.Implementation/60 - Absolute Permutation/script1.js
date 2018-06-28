//Input
var firstLine = "3", secondLine = ["2 1", "3 0", "3 2"];


retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var t = parseInt(firstLine);
    for(var i = 0 ; i < t ; i++){
        var nk = secondLine.split(" ").map( x => parseInt(x) );
        var n = nk[0], k = nk[1];
    };
    console.log(absolutePermutation(n, k));
    return "Hola";
};


function absolutePermutation(n, k) {


}
