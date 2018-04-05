//Input
var s = "aabbc";    // YES
var s= "aabbcd";   // YES
// var s= "abcccc";    // NO
// var s= "aabbcd";    // NO

retorno = eval(s);

//Solution
function eval(s){
    console.log(isValid(s));
    return "Hola";
};

function isValid(s){
    var answer = "NO";
    var len = s.length;
    var hashS = new Array(27).join("0").split("").map(parseInt); hashS[1] = 0;
    for(var i = 0 ; i < len ; i++){
        var index = s.charCodeAt(i) - 97;
        hashS[index]++;
    };

    if(areAllFrecuenciesEqual(hashS)){
        return "YES";
    } else{
        var tempHash = hashS;
        var decrease = false;
        for(var i = 0 ; i < hashS.length ; i++){
            if(!decrease && tempHash[i] != 0){
                tempHash[i]--;
                decrease = true;
            };
            if(areAllFrecuenciesEqual(tempHash)){
                return "YES";
            }
            if(decrease){
                tempHash[i]++;
                decrease = false;
            };
        };
    };
    return answer;
};

function areAllFrecuenciesEqual(frecuencies){
    var freq = 0;
    var answer = true;
    for(var i = 0 ; i < frecuencies.length ; i++){
        if(frecuencies[i] != 0 && freq == 0){
            freq = frecuencies[i];
        } else{
            if( (frecuencies[i] != 0) && (frecuencies[i] != freq) ){
                answer = false;
                break;
            };
        };
    };
    return answer;
};

