//Input
var s = "aabbc";    // YES
var s= "aabbcccdddd";   // YES
// var s= "abcccc";    // NO
// var s= "aabbcd";    // NO

retorno = eval(s);

//Solution
function eval(s){
    console.log(isValid(s));
    return "Hola";
};

function isValid(s){
    var answer = "YES";
    var len = s.length;
    var hashS = new Array(27).join("0").split("").map(parseInt); hashS[1] = 0;
    //console.log("hashS: " + hashS);
    for(var i = 0 ; i < len ; i++){
        var index = s.charCodeAt(i) - 97;
        hashS[index]++;
    };
    console.log("hashS: " + hashS);

    var minMax = checkMinMax(hashS); //console.log("minMax: " + minMax);
    if( (minMax[1] - minMax[0]) > 1 ){
        return "NO";
    };

    var frecuenciesOK = checkFrecuencies(hashS);
    console.log("frecuencies: " + frecuenciesOK);


    return answer;
};

function checkMinMax(s){
    var len = s.length;
    //console.log("len: " + len);
    var max = Number.MIN_SAFE_INTEGER;
    var min = Number.MAX_SAFE_INTEGER;
    var answer = [0, 0];
    for(var i = 0 ; i < len ; i++){
        //console.log("s[" + i + "]: " + s[i] + "    max:" + max);
        if(s[i] > max && s[i] != 0){
            max = s[i];
        };
        if(s[i] < min && s[i] != 0){
            min = s[i]
        };
    };
    answer[0] = min;
    answer[1] = max;
    //console.log("min: " + answer[0] + "    max: " + answer[1]);
    return answer;
};

function checkFrecuencies(s){
    var answer = true;
    var len = s.length
    var freq1 = 0; var freq2 = 0;
    for(var i = 0 ; i < len ; i++){
        if(s[i] != 0 && freq1 == 0){
            freq1 = s[i];
        };
        if(s[i] != 0 && s[i] != freq1 && freq2 == 0){
            freq2 = s[i];
        };
        //console.log("freq1: " + freq1 + "    freq2: " + freq2);
        if(s[i] != 0 && s[i] != freq1 && s[i] != freq2){
            answer = false;
        };
    };
    return answer;
};



