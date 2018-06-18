//Input
var firstLine = "3"; var secondLine = ["10 2 5", "12 4 4", "6 2 2"]; //6 3 5

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var t = parseInt(firstLine);
    for(var i = 0 ; i < t ; i++){
        var ncm = secondLine[i].split(" ").map( x => parseInt(x) );
        var n = ncm[0], c = ncm[1], m = ncm[2];
        console.log(chocolateFeast(n, c, m));
    };
    return "Hola";
};


function chocolateFeast(n, c, m) {
    var numberOfChocolates = 0;

    return numberOfChocolates;
}
