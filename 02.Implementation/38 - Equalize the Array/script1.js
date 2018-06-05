//Input
var firstLine = "5"; var secondLine = "3 3 2 1 3"; // 2

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var arr = secondLine.split(" ").map( x => parseInt(x) );
    console.log(equalizeArray(arr));
    return "Hola";
};


function equalizeArray(arr) {
    var deletions = 0, len = arr.length;

    return deletions;
}
