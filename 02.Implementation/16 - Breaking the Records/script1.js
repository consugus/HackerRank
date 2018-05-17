//Input
var firstLine = "9";    var secondLine = "10 5 20 20 4 5 2 25 1"; // 2 4
// var firstLine = "10";   var secondLine = "3 4 21 36 10 28 35 5 24 42"; //4 0

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var score = secondLine.split("").map( x => parseInt(x) );

    console.log(breakingRecords(score));
    return  "Hola";
};


function breakingRecords(score){


    return 2
};

