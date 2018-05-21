//Input
var firstLine = "6"; var secondLine = "4 6 5 3 3 1"; // 3
var firstLine = "6"; var secondLine = "1 2 2 3 1 2"; // 5
var firstLine = "73"; var secondLine = "4 2 3 4 4 9 98 98 3 3 3 4 2 98 1 98 98 1 1 4 98 2 98 3 9 9 3 1 4 1 98 9 9 2 9 4 2 2 9 98 4 98 1 3 4 9 1 98 98 4 2 3 98 98 1 99 9 98 98 3 98 98 4 98 2 98 4 2 1 1 9 2 4";
//      22
// var firstLine = "100"; var secondLine = "84 43 11 41 2 99 31 32 56 53 42 14 98 27 64 57 16 33 48 21 46 61 87 90 28 12 62 49 29 77 82 70 80 89 95 52 13 19 9 79 35 67 51 39 7 1 66 8 17 85 71 97 34 73 75 6 91 40 96 65 37 74 20 68 23 47 76 55 24 3 30 22 55 5 69 86 54 50 10 59 15 4 36 38 83 60 72 63 78 58 88 93 45 18 94 44 92 81 25 26";
//      3
// var firstLine = "100"; var secondLine = "66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66";  
//      100
// var firstLine = "100"; var secondLine = "14 18 17 10 9 20 4 13 19 19 8 15 15 17 6 5 15 12 18 2 18 7 20 8 2 8 11 2 16 2 12 9 3 6 9 9 13 7 4 6 19 7 2 4 3 4 14 3 4 9 17 9 4 20 10 16 12 1 16 4 15 15 9 13 6 3 8 4 7 14 16 18 20 11 20 14 20 12 15 4 5 10 10 20 11 18 5 20 13 4 18 1 14 3 20 19 14 2 5 13";
//      15


retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var a = secondLine.split(" ").map( x => parseInt(x));

    console.log(pickingNumbers(n, a));
    return "Hola";
};

function pickingNumbers(n, a) {
    var hashFrecuencies = new Array(100);
    for(var i = 0 ; i < hashFrecuencies.length ; i++){
        hashFrecuencies[i] = 0;
    };
    var maxLen = 0;

    for(var i = 0 ; i < hashFrecuencies.length ; i++){
        hashFrecuencies[a[i]]++;
    };
    maxLen = hashFrecuencies[0] + hashFrecuencies[1];
    for(var i = 2 ; i < hashFrecuencies.length ; i++){
        if( (hashFrecuencies[i-1] + hashFrecuencies[i]) > maxLen ){
            maxLen = hashFrecuencies[i-1] + hashFrecuencies[i];
        };
    };

    return maxLen;
}



