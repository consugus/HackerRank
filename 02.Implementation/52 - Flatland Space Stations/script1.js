//Input
var firstLine = "5 2", secondLine = "0 4"; // 2
// var firstLine = "6 6", secondLine = "0 1 2 3 4 5"; // 0

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var nm = firstLine.split(" ").map( x => parseInt(x));
    var n = nm[0], m = nm[1];
    var c = secondLine.split(" ").map( x => parseInt(x));
    console.log(flatlandSpaceStations(n, c));
    return "Hola";
};


function flatlandSpaceStations(n, c) {
    var len = c.length;
    var maxDist = 0;
    for( var i = 0 ; i < n ; i++){
        var tmp = Number.MAX_VALUE;
        for(var j = 0 ; j < len ; j++){
            if( Math.abs(i - c[j]) < tmp  ){
                tmp = Math.abs(i - c[j]);
            };
        };
        if( tmp > maxDist){
            maxDist = tmp
        };
    };

    return maxDist;
}