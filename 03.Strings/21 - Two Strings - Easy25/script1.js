//Input
var p = 2;
var arr = [["hello", "world"], ["hi", "world"]];

// var p = 1;
// var arr = [["hello", "world"]];

retorno = eval(p, arr);

//Solution
function eval(p, arr){
    for(var i = 0 ; i < arr.length ; i++){
        console.log(twoStrings(arr[i][0], arr[i][1]));
    };
};

function twoStrings(s1, s2){
    var haveSubstringsInCommon = "NO";
    //console.log("s1: " + s1 + "    s2: " + s2);
    var hashS1 = new Array(27).join("0").split(""). map(parseInt); hashS1[1] = 0;
    var hashS2 = new Array(27).join("0").split(""). map(parseInt); hashS2[1] = 0;
    //console.log("hashS1: " + hashS1 + "\nhashS2: " + hashS2);
    var len = s1.length;
    for(var i = 0 ; i < len ; i++){
        index = s1.charCodeAt(i)-97
        hashS1[index]++;
    };
    len = s2.length;
    for(var i = 0 ; i < len ; i++){
        index = s2.charCodeAt(i)-97
        hashS2[index]++;
    };
    //console.log("hashS1: " + hashS1 + "\nhashS2: " + hashS2);

    for(var i = 0 ; i < hashS1.length ; i++){
        if(hashS1[i] != 0 && hashS2[i] != 0){
            haveSubstringsInCommon = "YES";
        };
    };
    return haveSubstringsInCommon;
    
};



