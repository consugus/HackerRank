//Input
var s = "aaabbbb"; // YES       1 <= |s| <= 100.000
// var s = "cdefghmnopqrstuvw"; // NO
// var s = "cdcdcdcdeeeef"; // YES

retorno = eval(s);

//Solution
function eval(s){
    console.log(gameOfThrones(s));
    return "Hola";
};

function gameOfThrones(s){
    var canBeRearrange = "YES";
    var hashStr = new Array(27).join("0").split("").map(parseInt); hashStr[1] = 0;
    //console.log("hashStr: " + hashStr);
    var len = s.length;
    for(var i = 0 ; i < len ; i++){
        var index = s.charCodeAt(i)-97;
        //console.log("index: " + index);
        hashStr[index]++;
    };
    //console.log("hashStr: " + hashStr);

    var evenExists = false;
    for(var i = 0 ; i < hashStr.length ; i++){
        //console.log("hashStr[" + i + "]: " + hashStr[i]);
        if( (hashStr[i] % 2 != 0) ){
            if(evenExists == false){
                evenExists = true;
            } else{
                canBeRearrange = "NO";
                break;
            };
        };
    };
    return canBeRearrange;

};


