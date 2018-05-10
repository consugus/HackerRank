//Input
//#region legend
// n --> number of units                    1 <= n <= 250
// m --> number of coins type               1 <= m <= 50
// c --> values of each coin available
//       in infinite amounts                1 <= ci <= 50
//#endregion

var firstLine = "4 3"; var secondLine = "1 2 3";     // 4 {1111, 112, 22, 13}
// var firstLine = "10 4"; var secondLine = "2 5 3 6";  // 5

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var nm = firstLine.split(" ").map( x => parseInt(x) );
    var n = nm[0]; var m = nm[1];
    var coins = secondLine.split(" ").map( x => parseInt(x) );
    coins.sort( (a, b) => a-b );
    console.log(getWays(n,coins));
    return "Hola";
};

function getWays(n, c){
    var len = c.length;
    for(var i = 0 ; i < len ; i++){


    };

    return 2;
};

