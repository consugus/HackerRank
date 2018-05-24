//Input
var firstLine = "11"; var secondLine = "0 1 2 3 4 5 6 7 8 9 10";
// 1,2,3,6,7,14,15,30,31,62,63

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var t = parseInt(firstLine);
    var heights = secondLine.split(" ").map( x => parseInt(x));
    for(var i = 0; i < t ; i++){
        console.log(utopianTree(heights[i]));
    };
};


function utopianTree(n) {
    var result = 0;

    // taken from The On-line Encyclopedia of Integer Sequences
    if(n == 0){ return 1;};

    // One way
    result = (1 + n%2) *utopianTree(n-1) + 1 - n%2;
    return result;

    // Another way
    // if((n%2) == 0){
    //     result = 2^(n/2+1)-1;
    // } else{
    //     result = 2^(1+(n+1)/2)-2;
    // };
}
