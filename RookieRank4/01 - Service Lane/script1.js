//Input
var n = 8; //The length of the freeway
var t = 5; // The number of the test cases
var width = [2, 3, 1, 2, 3, 2, 3, 3]; //T cases
var cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];

retorno = eval(n, t, width, cases);

//Solution
function eval(n, t, width, cases){
    var answer;
    for (var i = 0 ; i < t ; i++){
        var myCase = cases[i];
        answer = serviceLane(myCase, n, width);
        //console.log("2" + answer);
    };
    return "Hola";
};

function serviceLane(myCase, n, width){


    return 1;
};

