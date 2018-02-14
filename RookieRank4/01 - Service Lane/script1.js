//Input
var n = 8; //The length of the freeway
var t = 5; // The number of the test cases
var width = [2, 3, 1, 2, 3, 2, 3, 3]; //T cases
//           0  1  2  3  4  5  6  7
var cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]; //1 2 3 2 1

var n = 5;
var t = 5;
var width = [1, 2, 2, 2, 1]; //T cases
//           0  1  2  3  4
var cases = [[2, 3], [1, 4], [2, 4], [2, 4], [2, 3]]; // 2 1 1 1 2





retorno = eval(n, t, width, cases);

//Solution
function eval(n, t, width, cases){
    var answer;
    for (var i = 0 ; i < t ; i++){
        var myCase = cases[i];
        answer = serviceLane(myCase, n, width);
        console.log(answer);
    };
    //return "Holita";
};

function serviceLane(myCase, n, width){
    var min = 4;
    for (var i = myCase[0] ; i <= myCase[1] ; i++){
        if(min > width[i]){
            min = width[i];
        };
    };
    return min;
};

