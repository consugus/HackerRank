//Input
var firstLine = "2"; var secondLine = "3 9"; var thirdLine = "17 24"; // 2 0

retorno = eval(firstLine, secondLine, thirdLine);

//Solution
function eval(firstLine, secondLine, thirdLine){
    var t = parseInt(firstLine);
    for(var i = 0 ; i < t ; i++){
        var ab = secondLine.split(" ").map( x => parseInt(x));
        var a = ab[0]; var b = ab[1];
        console.log(squares(a, b));
    };
    return "Hola";
};


function squares(a, b) {
    var count = 0, i = 1;

    while(Math.pow(i, 2) <= b){
        if(Math.pow(i, 2) >= a && Math.pow(i, 2) <= b){
            count++;
        };
        // console.log("i^2: " + Math.pow(i, 2) + "\tcount: " + count);
        i++;
    };
    return count;
}
