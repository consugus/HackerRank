//Input
var firstLine = "2"; var secondLine = ["12","1012"];

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var t = parseInt(firstLine);
    var len = secondLine.length;

    for(var i = 0; i < len ; i++){
        console.log(findDigits(parseInt(secondLine[i])));
        //console.log("suma: " + (parseInt(secondLine[i]) + 3));
    };


    return "Hola";
};


function findDigits(n) {
    var divisor = 0;



    return divisor;
}
