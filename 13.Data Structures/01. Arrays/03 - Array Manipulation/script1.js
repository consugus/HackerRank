//Input
var firstLine = "5 3", secondLine = ["1 2 100", "2 5 100", "3 4 100"];


retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var nm = firstLine.split(" ").map( x => parseInt(x) );
    var n = nm[0], m = nm[1], queries = [];
    for(var i = 0 ; i < m ; i++){
        queries.push(secondLine[i].split(" ").map( x => parseInt(x) ));
    };

    console.log(arrayManipulation(n, queries));
    return "Hola";
};


function arrayManipulation(n, queries) {
    console.log("n: " + n + "\tqueries: " + queries);
    var largestValue = Number.MIN_SAFE_INTEGER;

    return largestValue;
}
