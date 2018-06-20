//Input
var firstLine = "6 2", secondLine = "1 2 5 7 9 85"; // 2 OK
// var firstLine = "6 2", secondLine = "1 3 5 7 9 85"; // 1 OK
// var firstLine = "6 2", secondLine = "50 92 94 96 98 120"; // 2 OK
// var firstLine = "3 2", secondLine = "2 2 5"; // 2 OK
// var firstLine = "6 2", secondLine = "7 85 87 13 15 17"; // 2 OK
// var firstLine = "6 1", secondLine = "1 1 3 4 5 6"; // 1 OK
// var firstLine = "5 2", secondLine = "7 7 7 7 7"; // 4 OK
// var firstLine = "2 2", secondLine = "1 3"; 0 OK
// var firstLine = "10 1", secondLine = "1 2 3 20 21 22 23 8 9 10"; // 4 OK
var firstLine = "5 4", secondLine = "1 4 8 12 20"; // 2 OK


retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var nk = firstLine.split(" ").map( x => parseInt(x) );
    var n = nk[0], k = nk[1];
    var a = secondLine.split(" ").map( x => parseInt(x) );
    console.log(minuteToWinIt(a, k));
    return "Hola";
};


function minuteToWinIt(a, k) {
    // Return the minimum amount of time in minutes.
    var a1 = [], a2 = [], a3 = [];
    var count1 = 0, count2 = 0, count3 = 0, len = a.length;
    for(var i = 0 ; i < len ; i++){
        a1[i] = a[i]; a2[i] = a[i]; a3[i] = a[i];
    };

    for(var i = 0 ; i < len - 1 ; i++){
        if( ( a1[i+1] - a1[i] != k ) ){
            a1[i+1] = a1[i] + k;
            count1++;
        };
    };

    for(var i = len -1 ; i > 0 ; i--){
        if( (a2[i] - a2[i-1]) != k ){
            a2[i-1] = a2[i] - k;
            count2++;
        };
    };

    for(var i = Math.floor(len/2) ; i > 0 ; i--){
        //console.log("i: " + i);
        if( (a3[i] - a3[i-1] != k) ){
            a3[i-1] = a3[i] - k;
            count3++
        };
    };
    for(var i = Math.floor(len/2) ; i < len -1 ; i++ ){
        // console.log("i: " + i);
        if( (a3[i+1] - a3[i] != k) ){
            a3[i+1] = a3[i] + k;
            count3++;
        };
    };

    return Math.min(count1, count2, count3);
}
