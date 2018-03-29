//Input
var n = 2;
var arr = ["abcd", "abab"]; // 4, 2

// var n = 1;
// var arr = ["abab"];

retorno = eval(n, arr);

//Solution
function eval(n, arr){
    for(var i = 0 ; i < arr.length ; i++){
        console.log(stringConstruction(arr[i]));
    };
    return "Hola";
};

function stringConstruction(s){
    var totalCost = 0;
    var len = s.length;
    //console.log("s: " + s + "(" + len + ")");

    return totalCost;
};



