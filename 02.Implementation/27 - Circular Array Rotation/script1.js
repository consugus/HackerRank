//Input
var firstLine = "3 2 2"; var secondLine = "3, 4, 5"; var thirdLine = "1 2"; // 5 3
var firstLine = "3 2 3"; var secondLine = "1 2 3"; var thirdLine = "0 1 2"; // 2 3 1


retorno = eval(firstLine, secondLine, thirdLine);

//Solution
function eval(firstLine, secondLine, thirdLine){
    var nkq = firstLine.split(" ").map( x => parseInt(x));
    var n = nkq[0]; var k = nkq[1]; var q = nkq[2];
    var a = secondLine.split(" ").map( x => parseInt(x));
    var positionsToShow = thirdLine.split(" ").map( x => parseInt(x));
    console.log("n: " + n + "\tk: " + k + "\tq: " + q + "\ta: " + a + "\tpositionsToShow: " + positionsToShow);

    var aRotated = circularArrayRotation(a, k);

    return "Hola";
};


function circularArrayRotation(a, k) {
    var len = a.length;
    var aRotated = new Array(len);
    for(var i = 0 ; i < len ; i++){
        aRotated[i] = 0;
    };
    console.log("aRotated: " + aRotated);



}
