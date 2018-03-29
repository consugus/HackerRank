//Input
var p = 2;
var arr = [["hello", "world"], ["hi", "world"]];

var p = 1;
var arr = [["hello", "world"]];

retorno = eval(p, arr);

//Solution
function eval(p, arr){
    for(var i = 0 ; i < arr.length ; i++){
        console.log(twoStrings(arr[i][0], arr[i][1]));
    };
};

function twoStrings(s1, s2){
    var haveSubstringsInCommon = false;
    console.log("s1: " + s1 + "    s2: " + s2);

    return haveSubstringsInCommon;
};



