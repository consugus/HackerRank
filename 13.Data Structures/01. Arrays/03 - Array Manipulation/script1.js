//Input
var firstLine = "5 3", secondLine = ["1 2 100", "2 5 100", "3 4 100"]; // 200
// var firstLine = "10 3", secondLine = ["1 5 3", "4 8 7", "6 9 1"]; // 10
var firstLine = "10 4", secondLine = ["2 6 8", "3 5 7", "1 8 1", "5 9 15"]; // 31


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
    // console.log("n: " + n + "\tqueries: " + queries);
    var arr = new Array(5);
    // console.log("arr: " + arr + "\tlen: " + queries.length);


    var largestValue = 0;

    for(var i = 0 ; i < queries.length ; i++){
        var a = queries[i][0], b = queries[i][1], k = queries[i][2];

        for(var j = (a-1) ; j <= (b-1) ; j++ ){
            if(arr[j] == undefined){
                arr[j] = k;
            } else{
                arr[j] += k;
            };
        };
        // console.log("queries[" + i + "]: " + queries[i] + "\t\tarr: " + arr);
    };
    arr.sort( (a,b) => (b-a) );

    return arr[0];
};
