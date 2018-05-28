//Input
var n = 25; // 15511210043330985984000000
var n = 100;

retorno = eval(n);

//Solution
function eval(n){
    console.log(extraLongFactorials(n));
    return "Hola";
};


function extraLongFactorials(n) {
    var factorial = n;
    while(n--){
        if( n != 0){
            // console.log("n: " + n);
            factorial *= n;
        };
    };
    console.log(factorial);
}
