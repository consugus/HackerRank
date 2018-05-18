//Input
var firstLine = "6"; var secondLine = "4 6 5 3 3 1"; // 3
var firstLine = "6"; var secondLine = "4 6 5 3 3 1"; // 5

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var a = secondLine.split(" ").map( x => parseInt(x));

    console.log(pickingNumbers(a));
    return "Hola";
};

function pickingNumbers(a) {

    return 2;
}



