//Input
var firstLine = "2", secondLine = ["3 1 2", "4 10 100"];
var firstLine = "1", secondLine = ["3 1 2"]; // 2 3 4
var firstLine = "1", secondLine = ["4 10 100"]; // 30 120 210 300

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var t = parseInt(firstLine);
    for(var i = 0 ; i < t ; i++){
        var nab = secondLine[i].split(" ").map( x => parseInt(x) );
        var n = nab[0], a = nab[1], b = nab[2];
        console.log(stones(n, a, b));
    };
    return "Hola";
};


function stones(n, a, b) {
    console.log("n: " + n + "\ta: " + a + "\tb: " + b);
    var str = "";



    return str;
}
