//Input
var t = 4;  // 1 <= t <= 10
var arr = ["abc", "abcba", "abcd", "cba"];

// var t = 1;
// var arr = ["abcd"];

retorno = eval(t, arr);

//Solution
function eval(t, arr){
    for(var i = 0 ; i < t ; i++){
        console.log(theLoveLetterMystery(arr[i]));
    };
};

function theLoveLetterMystery(str){
    var operationNumber = 0;
    for(var i = 0 ; i < str.length/2 ; i++){
        //console.log("str.chartAt[" + i + "]: " + str.charAt(i));
        operationNumber += Math.abs( str.charCodeAt(i) - str.charCodeAt(str.length - i - 1) );
        //console.log("diff: " + diff);
    };
    return operationNumber;
};



