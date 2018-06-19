//Input
var firstLine = "6 2", secondLine = "1 2 5 7 9 85"; // 2
var firstLine = "6 2", secondLine = "1 2 5 7 9 85"; // 2

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var nk = firstLine.split(" ").map( x => parseInt(x) );
    var n = nk[0], k = nk[1];
    var a = secondLine.split(" ").map( x => parseInt(x) );
    console.log(minuteToWinIt(a, k));
    return "Hola";
};


function minuteToWinIt(a, k) {
    // Return the minimum amount of time in minutes.


    return count;
}
