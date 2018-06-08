//Input
var firstLine = "5"; var secondLine = ["10 10 1 1 1", "5 9 2 3 4", "3 6 9 1 1", "7 7 4 2 1", "3 3 1 9 2"];
// 20 37 12 35 12
var firstLine = "1"; var secondLine = ["3 6 9 1 1"]; // 12
// var firstLine = "1"; var secondLine = ["7 7 4 2 1"]; // 35
// var firstLine = "1"; var secondLine = ["3 3 1 9 2"]; // 12

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var t = parseInt(firstLine);
    for(var i = 0 ; i < t ; i++){
        var bwbcWcZ = secondLine.split(" ").map( x => parseInt(x));
        var b = bwbcWcZ[0], w = bwbcWcZ[1], bc = bwbcWcZ[2], wc = bwbcWcZ[3], z = bwbcWcZ[4];
        console.log(taumBday(b, w, bc, wc, z));
    };

    return "Hola";
};

function taumBday(b, w, bc, wc, z) {


}

