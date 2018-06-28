//Input
var firstLine = "1 1", secondLine = ["1"]; // 6
// var firstLine = "3 3", secondLine = ["1 3 4", "2 2 3", "1 2 4"]; // 60
var firstLine = "10 1", secondLine = ["51", "32", "28", "49", "28", "21", "98", "56", "99", "77"]; // 1482




retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var hw = firstLine.split(" ").map( x => parseInt(x) );
    var h = hw[0], w = hw[1];
    var a = new Array(h);
    for(var i = 0 ; i < h ; i++){
        a[i] = secondLine[i].split(" ").map( x => parseInt(x) );
    };
    console.log(surfaceArea(a));
    return "Hola";
};


function surfaceArea(a) {
    var area = 2*a.length*a[0].length;

    // display the matrix
    for(var i = 0 ; i < a.length ; i++){ console.log(a[i] + "\n"); };

    // Transform the input array into a 1 based 2D array
    var tmp = new Array(a[0].length+3).join("0").split("").map( x => parseInt(x));
    for(var i = 0 ; i < a.length ; i++){
        a[i].unshift(0);
        a[i].push(0);
    };
    a.unshift(tmp);
    a.push(tmp);

    // displays the new matrix
    for(var i = 0 ; i < a.length ; i++){ console.log(a[i] + "\n");};

    for(var i = 1 ; i < a.length - 1 ; i++){
        for(var j = 1 ; j < a[0].length -1 ; j++){
            console.log("(i,j): (" + i + "," + j + ") --> " + a[i][j]);
            area += Math.max(0, a[i][j]-a[i-1][j]); // up
            area += Math.max(0, a[i][j]-a[i+1][j]); // down
            area += Math.max(0, a[i][j]-a[i][j-1]); // left
            area += Math.max(0, a[i][j]-a[i][j+1]); // rigth
        };
    };

    return area;
}
