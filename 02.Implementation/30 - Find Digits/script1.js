//Input
var firstLine = "2"; var secondLine = ["12","1012"];
// var firstLine = "1"; var secondLine = ["1012"];

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
    var divisors = 0;
    var num = n.toString().split("");
    var len = num.length;
    var frecuencies = new Array(10 + 1).join("0").split("").map(parseInt);if(len > 1){ frecuencies[1] = 0 };
    for(var i = 0 ; i < len ; i++){
        frecuencies[parseInt(num[i])]++;
    };

    for(var i = 0 ; i < 10 ; i++){
        if( (n % i == 0) ){
            divisors += 1 * frecuencies[i];
        };
    };

    return divisors;
}
