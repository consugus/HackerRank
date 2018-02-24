//Input
var s = "hereiamstackerrank"; // YES
//var s = "ackerrankh" //NO
//var s = "hackerworld"; //NO
//var s = "hola";
////var s = "hhhhaaaaackkkkerrrrrrrrank"; // YES
var s = "crackerhackerknar"; //NO



retorno = hackerrankInString(s);

//Solution
function hackerrankInString(s){
    var answer = "NO";
    var hackerrank = "hackerrank";
    var temp = "";

    if( !(s.length < 9) ){
        var i = 0
        for(var j = 0 ; j < s.length ; j++){
            if(hackerrank[i] == s[j]){
                temp += s[j];
                i++
            };
        };
    };

    if(temp == hackerrank){
        answer = "YES";
    };

    return answer;
};



