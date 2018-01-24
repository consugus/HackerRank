//Input
// var p = 3;
// var arr = [12, 5, 7];

var p = 30;
var arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 907];

// var p = 1;
// var arr = [17];//907

//Solution
function solve(p, arr){
    var result;
    for(var i = 0 ; i < p ; i++){
        if(seeIfPrime(arr[i])){
            result = "" + arr[i] + ": " + "Prime";
        } else{
            result = "" + arr[i]  + ": " + "Not prime";
        };
        console.log(result);
    };
    return "Hola";
}

function seeIfPrime(num){
    if (num == 1 || num == 4){
        return false;
    };
    for(var i = 2 ; i < Math.ceil(num/2) ; i++){
        if( (num % i) == 0 ){
            return false;
        };
    };
    return true;
};

var retorno = solve(p, arr);
