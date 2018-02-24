//Input
var s = "hereiamstackerrank"; // YES
var s = "hackerworld"; //NO
//var s = "hola";

retorno = hackerrankInString(s);

//Solution
function hackerrankInString(s){
    var answer = "NO";
    var stringToCheck = "hackerrank";

    if( !(s.length < 9) ){
        //for(var i = 0 ; i < stringToCheck.length ; i++){
            var i = 0;
            for(var j = 0 ; j < s.length ; j++){
                if(s[j] == stringToCheck[i]){
                    
                };
            };
        //};
    };


    return answer;
};



