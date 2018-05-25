//Input
var firstLine = "3"; // 9

retorno = eval(firstLine);

//Solution
function eval(firstLine){

    console.log( viralAdvertising(parseInt(firstLine)) );
    return "Hola";
};


function viralAdvertising(n) {
    var count = 0, start = 5;
    for(var i = 0 ; i < n ; i++){
        count += Math.floor(start/2);
        start = Math.floor(start/2)*3;
    };
    return count;
}
