//Input
var firstLine = "7", secondLine = "4", thirdLine = "7", fourthLine = ["1 2 3", "2 3 1", "1 4 4", "4 6 7", "7 5 2", "3 5 1", "4 5 5"];



retorno = eval(firstLine, secondLine, thirdLine, fourthLine);

//Solution
function eval(firstLine, secondLine, thirdLine, fourthLine){
    var n = parseInt(firstLine);  // number of junctions             1 <= n <= 10.000
    var k = parseInt(secondLine); // time taken by a signal to change its color
                                  //                                 1 <= k <= 100
    var m = parseInt(thirdLine);  // number of roads -               1 <= m <= 100.000
    var roads = [];

    for(var i = 0 ; i < m ; i++){
        // i, j, t --> from, to, timeToGet
        roads[i] = fourthLine[i].split(" ").map( x => parseInt(x) );
    };

    console.log(leastTimeToInterview(n, k, roads));
    return "Hola";
};


function leastTimeToInterview(n, k, roads) {
    // Return the least amount of time needed to reach the interview location in seconds.
    var time = 0, len = roads.length;
    console.log("n: " + n + "\t: " + k + "\nroads: " + roads[0][2]);


    return time;
}
