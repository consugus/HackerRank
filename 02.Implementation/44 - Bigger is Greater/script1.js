//Input
var firstLine = "5"; var secondLine = ["ab", "bb", "hefg", "dhck", "dkhc"];

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var t = parseInt(firstLine);
    for(var i = 0 ; i < t ; i++){
        console.log(biggerIsGreater(secondLine[i]));
    };

    return "Hola";
};


function biggerIsGreater(w) {
    var newW = "1";


    return newW;
}
