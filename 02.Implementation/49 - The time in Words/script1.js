//Input
var firstLine = "5", secondLine = "47"; // thirteen minutes to six
var firstLine = "3", secondLine = "00"; // three o' clock
var firstLine = "7", secondLine = "15"; // quarter past seven

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var h = parseInt(firstLine), m = parseInt(secondLine);

    console.log(timeInWords(h, m));
    return "Hola";
};


function timeInWords(h, m) {
    console.log(h + ":" + m);
    var str = "";


    return str;
}
