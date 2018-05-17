//Input
var n = 6; var p = 2;
var n = 5; var p = 4;

retorno = eval(n, p);

//Solution
function eval(n, p){

    console.log(pageCount(n, p));
    return "Hola";
};


function pageCount(n, p){
    var fromBeginning = Math.floor(p/2);
    var fromEnd = Math.floor(n/2) - fromBeginning;

    return Math.min(fromBeginning, fromEnd);
};
