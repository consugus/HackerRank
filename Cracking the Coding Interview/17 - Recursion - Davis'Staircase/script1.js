//Input
//  * 1 <= s <= 5
//  * 1 <= n <= 36

var s = 4;
//var n = 1; //1
var n = 3; //4
var n = 7; //44

//Solution
function solve(n){
   console.log(fibonacci(n-1));
   return "hola";
};

function fibonacci(n){
    var fib = [1, 2, 4];
    for(var i = 3 ; i <= n ; i++){
        fib[i%3] = fib[0] + fib[1] + fib[2];
    };
    return fib[n%3];
};

var retorno = solve(n);
