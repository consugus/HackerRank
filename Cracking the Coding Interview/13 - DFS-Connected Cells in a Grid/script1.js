//Input
var n = 4;
var m = 4
arr = [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 0], [1, 0, 0, 0] ];

//Solution
function eval(n, m, arr){
    //var maxNumberOfRegions = [0, 0, 0, 4, 4, 9, 9, 16, 16, 25, 25];
    //var region = 0;
    //var vectorRegions = new Array(n+1).join("0").split("").map(parseInt);
    /*
    if(n > 1){
        vectorRegions[1] = 0;
    };
    */

    //console.log("vectorRegions: " + vectorRegions + "    Length: " + vectorRegions.length);
    //console.log("Max of vectorRegions: " + Math.max(...vectorRegions));
    //console.log("Número Máximo de Regiones para largo " + n + " es de: " + maxNumberOfRegions[n]);;
    //console.log("arr: " + arr);

    //vectorRegions[region]++;

    // var i = 1;
    // var j = 1;
    // if( (i-1) >= 0 && (j-1) >= 0 ){
    //     console.log("\nInvalid Position: " + arr[i][j]);
    // } else{
    //     console.log("didnt show anything");
    // };


    var max = 0;
    for(var i = 0 ; i < n ; i++){
        for(var j = 0 ; j < m ; j++){
            max = Math.max(max, countCells(arr, i, j));
        };
    };
    console.log(max);
    return "Hola";
};

function countCells(arr, i, j){

    if(i < 0 || j < 0 || i >= arr.length || j >= arr[0].length){
        return 0;
    };
    if(arr [i][j] == 0){
        return 0;
    };
    var count = arr[i][j]--;
    count = count + countCells(arr, i + 1, j);
    count = count + countCells(arr, i - 1, j);
    count = count + countCells(arr, i , j + 1);
    count = count + countCells(arr, i , j - 1);
    count = count + countCells(arr, i + 1, j + 1);
    count = count + countCells(arr, i - 1, j - 1);
    count = count + countCells(arr, i - 1, j + 1);
    count = count + countCells(arr, i + 1, j  -1);
    return count;
};

retorno = eval(n, m, arr);

