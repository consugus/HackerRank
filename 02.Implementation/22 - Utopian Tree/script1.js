//Input
var firstLine = "3"; var secondLine = "0 1 4";

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

    return result;
}
