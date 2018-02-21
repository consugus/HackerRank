//Input
var s = "saveChangesInTheEditor"; // 5

retorno = camelCase(s);

//Solution
function camelCase(s){
    var upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var answer = 0;

    for (var i = 0 ; i < s.length ; i++){
        for(var j = 0 ; j < upperCaseAlphabet.length ; j++){
            if(s[i] == upperCaseAlphabet[j]){
                answer++;
            };
        };
    };

    return answer+1;
};



