//Input
var firstLine = ["-9 -9 -9 1 1 1", "0 -9 0 4 3 2", "-9 -9 -9 1 2 3", "0 0 8 6 6 0", "0 0 0 -2 0 0", "0 0 1 2 4 0"];
// 28
var firstLine = ["1 1 1 0 0 0", "0 1 0 0 0 0", "1 1 1 0 0 0", "0 0 2 4 4 0", "0 0 0 2 0 0", "0 0 1 2 4 0"];
// 19

retorno = eval(firstLine);

//Solution
function eval(firstLine){
    var arr = [];
    for(var i = 0 ; i < 6 ; i++){
        var tmp = firstLine[i].split(" ").map( x => parseInt(x) );
        arr.push(tmp);
    };

    console.log(hourglassSum(arr));
    return "Hola";
};


function hourglassSum(arr) {
    var maxHourglass = Number.MIN_SAFE_INTEGER;
    for(var i = 0 ; i < 6 ; i++){
        console.log(arr[i]);
    };

    for(var i = 0 ; i <= 3 ; i++){
        for(var j = 0 ; j <= 3 ; j++){
            var tmp = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if(tmp > maxHourglass){
                maxHourglass = tmp;
            };
        };
    };

    return maxHourglass;
}
