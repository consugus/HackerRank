//Input
var n = 15; // 1 <= n <= 10^18                      Stones
var m = 3; // 1 <= m <= 10                          setOfIntegers.length
var integers = [5, 3, 2]; // 2 <= si <= 10^18
// Expected Output --> Second

var n = 10;
var m =  3;
var integers = [5, 1000000000000000000, 2];      // Expected Output --> First

// var n = 728193859392014;
// var m =  4;
// var integers = [3, 94362298742, 7717, 227];      // Expected Output --> First



retorno = eval(n, m, integers);

//Solution
function eval(n, m, integers){
    var answer = "Second";
    var counter = 0;
    for(var i = 0 ; i < m ; i++){
        console.log("integers[" + i + "]: " + integers[i]);
        if( (n % integers[i]) == 0){
            //counter += Math.trunc(n / integers[i] + 1);
            counter++;
            console.log("counter: " + counter);
        };
    };

    console.log("\n\ncounter: " + counter);
    if( (counter % 2 == 0) && (n % 2) == 0 ){
        answer = "Second";
    } else{
        answer = "First";
    };

    return answer;
};



