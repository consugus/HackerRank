//Input
var firstLine = "2"; var secondLine = ["12","1012"];
var firstLine = "1"; var secondLine = ["1012"];

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
    var num = n.toString().split("");
    var len = num.length;
    console.log( "\n\nnum: " + num  + "\tlen: " + len);
    var frecuencies = new Array(len + 2).join("0").split("").map(parseInt);if(len > 1){ frecuencies[1] = 0 };
    for(var i = 0 ; i < len ; i++){

        console.log( parseInt(num[i]) );

        //if( parseInt(num[i] != 0) ){
            frecuencies[parseInt(num[i]) + 1]++;
        //};

    };
    console.log("frecuencies: " + frecuencies);


    return divisor;
}
