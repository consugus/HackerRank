//Input
var firstLine = "4", secondLine = [ ["7", "RBY_YBR"], ["6", "X_Y__X"], ["2", "__"], ["6", "B_RRBR"] ];
// YES NO YES YES
var firstLine = "1", secondLine = [ ["7", "RBY_YBR"] ]; // YES
// var firstLine = "2", secondLine = [ ["6", "X_Y__X"] ]; // NO
// var firstLine = "3", secondLine = [ ["2", "__"] ]; // YES
// var firstLine = "4", secondLine = [  ["6", "B_RRBR"] ]; // YES

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var g = parseInt(firstLine);
    for(var i = 0 ; i < g ; i++){
        var n = parseInt(secondLine[i][0]);
        var b = secondLine[i][1];
        console.log(happyLadybugs(b));
    };

    return "Hola";
};


function happyLadybugs(b) {
    var answer = "NO", len = b.length;
    console.log("len: " + len + "\tb: " + b);



    return answer;
}
