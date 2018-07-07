//Input
var firstLine = "3", secondLine = ["2 1", "3 0", "3 2"];    // 2 1
                                                            // 1 2 3
                                                            // -1

// var firstLine = "1", secondLine = ["2 1"]; // 2 1
// var firstLine = "1", secondLine = ["3 1"]; //
// var firstLine = "1", secondLine = ["12 2"]; // 3 4 1 2 7 8 5 6 11 12 9 10

// var firstLine = "1", secondLine = ["100 2"];
// Original:1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100
// Answer:  3 4 1 2 7 8 5 6 11 12 9 10 15 16 13 14 19 20 17 18 23 24 21 22 27 28 25 26 31 32 29 30 35 36 33 34 39 40 37 38 43 44 41 42 47 48 45 46 51 52 49 50 55 56 53 54 59 60 57 58 63 64 61 62 67 68 65 66 71 72 69 70 75 76 73 74 79 80 77 78 83 84 81 82 87 88 85 86 91 92 89 90 95 96 93 94 99 100 97 98

var firstLine = "10", secondLine = ["2 1", "10 5", "7 5", "2 1", "2 0", "2 0", "1 0", "10 5", "10 0", "6 0"];
//"2 1", "6 7 8 9 10 1 2 3 4 5", "-1", "2 1", "1 2", "1 2", "1", "6 7 8 9 10 1 2 3 4 5", "1 2 3 4 5 6 7 8 9 10", "1 2 3 4 5 6"

// var firstLine = "1", secondLine = ["10 5"]; // original: 1 2 3 4 5  6 7 8 9 10
                                            // answer:   6 7 8 9 10 1 2 3 4 5

// var firstLine = "1", secondLine = ["8 2"]; // original: 1 2 3 4 5 6 7 8
                                            // answer:  3 4 1 2 7 8 5 6



retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var t = parseInt(firstLine);
    for(var i = 0 ; i < t ; i++){
        var nk = secondLine[i].split(" ").map( x => parseInt(x) );
        var n = nk[0], k = nk[1];
        console.log(absolutePermutation(n, k) + "\n");
    };
    return "Hola";
};


function absolutePermutation(n, k) {
    var arr = [], answer = [];

    // Declaration of array
    for(var i = 1 ; i <= n ; i++){ arr.push(i); };
    // console.log( "Original: " + arr.join(" ")  + "\tn: " + n + "\tk: " + k);
    // console.log("Expected: 3 4 1 2 7 8 5 6\n\n");


    // console.log("k == 0: " + k == 0);
    // console.log("1. n%(2*k) != 0: " + (n%(2*k) == 0) + "\tn%(2*k): " + (n%(2*k))  );
    // console.log("2. 2*k <= n: " + ( (2*k) == n) + "\t2*k: " + (2*k) );
    if(k == 0){
        answer = arr;
    } else if( n%(2*k) == 0 && 2*k <= n ) { // already checked
        var add = true, count = 0;
        for(var i = 1 ; i <= n ; i++){
            // (add) ? answer.push(i+k) : answer.push(i-k);
            // add = ( (i%k == 0) && add ) ? false : true;
            if(add){
                answer.push(i+k);
            }else{
                answer.push(i-k);
            };

            count++;

            if(count == k){
                add = !add;
                count = 0;
            };

            // console.log( i + ". i%k == 0: " + (i%k == 0) + "\tadd: " + add + "\t\t(i%k == 0) && add): " + ( (i%k == 0) && add) );
            // if( (i%k == 0) && add ){
            //     add = false; // false
            // } else{
            //     add = true; // true
            // };
        };
    } else{
        answer.push(-1);
    };

    // answer = answer.join(" ");
    return answer;
}
