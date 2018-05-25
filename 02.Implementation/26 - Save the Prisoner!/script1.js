//Input
var firstLine = "2"; var secondLine = ["5 2 1", "5 2 2"];

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var queriesNumber = parseInt(firstLine);
    for(var i = 0 ; i < queriesNumber ; i++){
        var tmp = secondLine[i];
        var nms = tmp.split(" ") //.map( x => parseInt(x));
        var n = nms[0], m = nms[1]; s = nms[2];
        console.log(saveThePrisoner(n, m, s));
    };

    return "Hola";
};


function saveThePrisoner(n, m, s) {
    var warn = 0;


    return warn;
}
