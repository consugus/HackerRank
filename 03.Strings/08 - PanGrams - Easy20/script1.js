//Input
var s = "We promptly judged antique ivory buckles for the next prize" // pangram
//var s = "We promptly judged antique ivory buckles for the prize"; // not pangram
//var s = "hola";

retorno = eval(s);

//Solution
function eval(s){
    var answer = "pangram";
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var hashAlphabet = new Array(26).join("0").split("").map(parseInt);
    hashAlphabet[1] = 0;

    for(var i = 0 ; i < s.length ; i++){
        for(var j = 0 ; j < alphabet.length ; j++){
            if(s[i].toLowerCase() == alphabet[j] && hashAlphabet[j]  == 0){
                hashAlphabet[j] = alphabet[j];
            };
        };
    };

    for(var i = 0 ; i < hashAlphabet.length ; i++){
        if(hashAlphabet[i] == 0){
            answer = "not pangram";
        };
    };

    return answer;
};