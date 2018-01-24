//Input
var n = 4;

//Solution
function fibonacci(n){
    if (n > 1){
        return ( fibonacci(n-1) + fibonacci(n-2) ); //función revursiva
    };
    if(n == 0){ //caso base
        //console.log("entró en el cero");
        return 0;
    };
    if(n == 1){ //caso base
        //console.log("entró en el cero");
        return 1;
    };
};

var retorno = fibonacci(n);
