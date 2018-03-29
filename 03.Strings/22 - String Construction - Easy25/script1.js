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
    var hashS = new Array(27).join("0").split("").map(parseInt); hashS[1] = 0;

    for(var i = 0 ; i < len ; i++){
        var index = s.charCodeAt(i) - 97;
        hashS[index]++;
    };
    for(var i = 0 ; i < hashS.length ; i++){
        if(hashS[i] != 0){
            totalCost++;
        };
    };

    return totalCost;
};



