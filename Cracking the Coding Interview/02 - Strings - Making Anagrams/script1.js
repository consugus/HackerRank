//Input
// var a = "cde";
// var b = "abc";

var a = "fcrxzwscanmligyxyvym";
var b = "jxwtrhvujlmrpdoqbisbwhmgpmeoke";



//Solution
function solve(a, b){
    var tempA = new Array(26).fill(0);
    var tempB = new Array(26).fill(0);
    var alphabet  = "abcdefghijklmnopqrstuvwxyz";
    var deletions = 0;
    console.log("tempA: " + tempA);
    console.log("tempB: " + tempB);
    console.log("alphabet: " + alphabet + "    length: " + alphabet.length);

    //Count frecuencies for each letter in chains "a" and "b"
    for(var i = 0 ; i < a.length ; i++){
        for(var j = 0 ; j < 26 ; j++){
            if (alphabet[j] == a[i]){
                tempA[j]++;
            }
        };
    };
    for(var i = 0 ; i < b.length ; i++){
        for(var j = 0 ; j < 26 ; j++){
            if (alphabet[j] == b[i]){
                tempB[j]++;
            }
        };
    };
    console.log("tempA: " + tempA);
    console.log("tempB: " + tempB);
    //See if frecuency of each caracter is equal in boch temp chains
    for(var i = 0 ; i < 26 ; i++){
        if(tempA[i] != tempB[i]){
            console.log("i: " + i + "    tempA[" + i + "]: " + tempA[i] + "    tempB[" + i + "]: " + tempB[i] + "    deletions: " + deletions);
            deletions += Math.abs(tempA[i] - tempB[i]);
        };
    };
    return deletions;
}

var retorno = solve(a, b);
