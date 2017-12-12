/////////////// ignore above this line ////////////////////

function aVeryBigSum(n, ar) {
    // Complete this function

    var result = 0;
    for (var i = 0 ; i < ar.length ; i++){
        result += ar[i];
    }
    return result;


}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = aVeryBigSum(n, ar);
    process.stdout.write("" + result + "\n");

}
