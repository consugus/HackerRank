//Input
var n = 5 // Number of Squares in the chocolate bar
var s = [1, 2, 1, 3, 2] //The numbers written on each square of chocolate
var d = 3; // Ron's birth "day". Also the result for the consecutives numbers
           //written on each peace of chocolate
var m = 2; // Ron's birth "month". Also the number of consecutive squares of
           // chocolate

// var n = 6;
// var s = [1, 1, 1, 1, 1, 1];
// var d = 3;
// var m = 2;

// var n = 1;
// var s = [4];
// var d = 4;
// var m = 1;

// var n = 16;
// var s = [5, 5, 3, 2, 2, 2, 1, 2, 5, 3, 5, 5, 4, 3, 3, 5];
// var d = 13;
// var m = 3

//Solution

function solve(n, s, d, m){

    var result = 0;
    for(var i = 0 ; i <= (n-m) ; i++){
        result += calculate(i, n, s, d, m);
    }
    console.log("result: " + result);
    return result;
}

function calculate(i, n, s, d, m){
    var sum = s[i];
    numberOfSquaresCounted = 1;

    if(sum == d && numberOfSquaresCounted == m){
        return 1
    }
    if(sum >= d && numberOfSquaresCounted != m){
        return 0;
    }

    for (var j = (i+1) ; j < n ; j++){
        sum += s[j];
        numberOfSquaresCounted++;
        if(sum >= d && numberOfSquaresCounted != m){
            return 0;
        }
        if(sum == d && numberOfSquaresCounted == m){
            return 1;
        }
    }
    return 0;
}






var retorno = solve(n, s, d, m);
