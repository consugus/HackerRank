//Input
var t = 2;
var s = ["acxz", "bcxz"] // Funny, Not Funny

var t = 1;
var s = ["acxz"];

retorno = eval(t, s);

//Solution
function eval(t, s){
    for (var i = 0 ; i < t ;  i++){
        
        console.log(funnyString(s[i]));
    };
    return "Hola";
};

function funnyString(s){
    var r = s.reverse();
    console.log(s, r);
    var answer = "Funny";



    return answer;
};



