//Input
var firstLine = "5"; var secondLine = "5 2 1 3 4"; // 4 2 5 1 3
// var firstLine = "3"; var secondLine = "2 3 1"; // 2 3 1

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var p = secondLine.split(" ").map( x => parseInt(x) );
    console.log(permutationEquation(p));
    return "Hola";
};


function permutationEquation(p) {
    var len = p.length;
    var answer = [];

    for(var i = 0 ; i < len ; i++){
        console.log(i);
    };



    return answer;
}
