//Input
var firstLine = "5 3", secondLine = "4 2 6 1 10"; // 4

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var nk = firstLine.split(" ").map( x => parseInt(x) );
    var n = nk[0], k = nk[1];
    var arr = secondLine.split(" ").map( x => parseInt(x) );

    console.log(workbook(n, k, arr));
    return "Hola";
};


function workbook(n, k, arr) {
    var specialProblemsCount = 0;


    return specialProblemsCount;
}
