//Input
var firstLine = "4 3"; var secondLine = "1 7 2 4"; // 3
var firstLine = "5 5"; var secondLine = "2 7 12 17 22"; // 5
var firstLine = "5 1"; var secondLine = "1 2 3 4 5"; // 1
var firstLine = "6 9"; var secondLine = "422346306 940894801 696810740 862741861 85835055 313720373"; // 5
// var firstLine = "10 5"; var secondLine = "770528134 663501748 384261537 800309024 103668401 538539662 385488901 101262949 557792122 46058493"; // 6
// var firstLine = "1 2"; var secondLine = "2"; // 2
// var firstLine = "4 3"; var secondLine = "1 4 9 3"; // 3

retorno = eval(firstLine, secondLine);


//Solution
function eval(firstLine, secondLine){
    var nk = firstLine.split(" ").map( x => parseInt(x) );
    var n = nk[0], k = nk[1];
    var S = secondLine.split(" ").map( x => parseInt(x) );
    console.log( nonDivisibleSubset(k, S) );
    return "Hola";
};


function nonDivisibleSubset(k, S) {
    var num1, num2, count = 0, len = S.length;
    var remaindersCounter = new Array(k+1).join("0").split("").map(parseInt); if(k > 1){remaindersCounter[1] = 0};

    //storing all the remaiders for K frecuencies
    for(var i = 0 ; i < len ; i++){
        remaindersCounter[ S[i]%k ]++;
    };
    // console.log("remaindersCounter: " + remaindersCounter);

    // If remainderCounter[0] != 0, add 1 to S` size, because at most one value
    // can be added to the result set
    if(remaindersCounter[0] >= 1){ count++ };
    // console.log("case 1 count: " + count);
    // If k was an even number and remainderCounter[k / 2] != 0, add 1 to S` size,
    // because at most one value can be added to the result set;
    if( k%2 == 0 && remaindersCounter[k/2] >= 1){ count++ };
    // console.log("case 2 count: " + count);

    // Increase the S`size by max(remainderCounter[j],remainderCounter[k-j]) for
    // j = 1, ..., k / 2, where j != (k - j)
    for(var i = 1 ; i <= Math.floor(k/2) ; i++){
        if( i != (k-i) ){
            count += Math.max(remaindersCounter[i], remaindersCounter[k-i]);
            // console.log("remaindersCounter[i]: " + remaindersCounter[i] + "\tremaindersCounter[k-i]: " + remaindersCounter[k-i]  + "\tMax: " + Math.max(remaindersCounter[i], remaindersCounter[k-i]) + "\tcount: " + count);
        };
    };

    return count;
}
