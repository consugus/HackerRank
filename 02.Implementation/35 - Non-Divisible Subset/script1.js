//Input
var firstLine = "4 3"; var secondLine = "1 7 2 4"; // 3
var firstLine = "5 5"; var secondLine = "2 7 12 17 22"; // 5
// var firstLine = "5 1"; var secondLine = "1 2 3 4 5"; // 1
// var firstLine = "6 9"; var secondLine = "422346306 940894801 696810740 862741861 85835055 313720373"; // 5
// var firstLine = "10 5"; var secondLine = "770528134 663501748 384261537 800309024 103668401 538539662 385488901 101262949 557792122 46058493"; // 6
// var firstLine = "1 2"; var secondLine = "2"; // 2
// var firstLine = "4 3"; var secondLine = "1 4 9 3"; // 3

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var nk = firstLine.split(" ").map( x => parseInt(x) );
    var n = nk[0], k = nk[1];
    var S = secondLine.split(" ").map( x => parseInt(x) );
    console.log( nonDivisibleSubset(k, S) );
    return "Hola";
};


function nonDivisibleSubset(k, S) {
    var num1, num2;
    var len = S.length;
    var count = 0;
    for(var i = 0 ; i < len ; i++){
        num1 = S[i];
        for(var j = 1 ; j < len - i; j++){
            num2 = S[i+j];
            console.log("num1: " + num1 + "\tnum2: " + num2 + "\tnum1+num2: " + (num1 + num2));
            if( (num1 + num2)%k == 0 ){
                break;
            };
            // entonces num1 y num2 forman parte del subset, pero num1 puede 
            // ya existir, ver cómo solucionar
        };
    };

    return count;
}
