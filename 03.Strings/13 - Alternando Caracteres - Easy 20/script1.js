//Input
var t = 5
var arr = ["AAAA", "BBBBB", "ABABABAB", "BABABA", "AAABBB"];

// var t = 1;
// var arr = ["AAAA"];

retorno = eval(t, arr);

//Solution
function eval(t, arr){
    for(var i = 0 ; i < t ; i++){
        console.log(alternatingCharacters(arr[i]));
    };
    return "Hola";
};

function alternatingCharacters(s){
    var charactersDeleted = 0;
    for(var i = 0 ; i < (s.length) ; i++){
        if(s[i] == s[i+1]){
            charactersDeleted++;
        };
    };
    return charactersDeleted;
};



