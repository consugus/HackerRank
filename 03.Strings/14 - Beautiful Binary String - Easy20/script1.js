//Input
var n = 7;         //1 <= n <= 100
var b = "0101010"; // 2

var n = 5;
var b = "01100" // 0

var n = 10;
var b = "0100101010"; // 3

retorno = eval(b);

//Solution
function eval(b){
    return beautirulBinaryString(b);
};

function beautirulBinaryString(b){
    var steps = 0;
    for(var i = 0 ; i < (b.length -2) ; i++){
        if(b[i] == "0" && b[i+1] == "1" && b[i+2] == "0"){
            steps++;
            i+=2;
        };
    };
    return steps;
};



