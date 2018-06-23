//Input
var firstLine =  "5", secondLine = "2, 3, 4, 5, 6"; // 4
// var firstLine =  "2", secondLine = "1 2"; //  NO
var firstLine =  "4", secondLine = "2 3 4 5"; //  2

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var B = secondLine.split(" ").map( x => parseInt(x) );
    console.log(fairRations(B));
    return "Hola";
};


function fairRations(B) {
    console.log("0.\tB: " + B);
    var minNum = 0, len = B.length;
    // If count of odd numbers is odd the problem doesn't have solution

    // Count of odd numbers
    var odds = 0;
    for(var i = 0 ; i < len ; i++){
        if(B[i]%2 != 0){ odds++; };
    };
    if(odds%2 == 1){ return "NO"; };

    // Counting minNum
    if(B[0]%2 != 0){
        B[0]++;
        B[1]++;
        minNum +=2;
    };
    for(var i = 1 ; i < len -1; i++){
        if(B[i]%2 != 0){
            B[i]++;
            B[i+1]++;
            minNum +=2;
        };
        console.log(i + ".\tB: " + B);
    };

    return minNum;
}
