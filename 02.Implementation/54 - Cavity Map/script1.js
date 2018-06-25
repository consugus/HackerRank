//Input

var firstLine = "4", secondLine = ["1112", "1912", "1892", "1234"]; // "1112", "1X12", "18X2", "1234"
// var firstLine = "4", secondLine = ["1234", "5678", "9123", "4567"];

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine), grid = [];
    for(var i = 0 ; i < n ; i++){
        grid[i] = secondLine[i].split("");//.map( x => parseInt(x) );
    };
    console.log(cavityMap(grid));
    return "Hola";
};


function cavityMap(grid) {
    var len = grid.length, str = new Array(len);

    // #region grid visualization as it was recieved
    // console.log("\ngrid");
    // for(var i = 0 ; i < len ; i++){
    //     console.log(i + ".\t" + grid[i] + "\n");
    // };
    // #endregion

    // filling new grid (str) with appropiated values
    // first row goes as it is recieved
    var row = new Array(len);
    for(var i = 0 ; i < len ; i++){
        row[i] = grid[0][i];
        str[0] = row;
    };

    for(var i = 1 ; i < len - 1 ; i++){
        var row = new Array(len);
        row[0] = grid[i][0]; // first row value goes the same
        for(var j = 1 ; j < len - 1 ; j++){
            // console.log( (grid[i-1][j]      < grid[i][j]) + " " + (grid[i][j-1]      < grid[i][j]) + " " + (grid[i][j+1]      < grid[i][j]) + " " + (grid[i+1][j]      < grid[i][j]) );
            if( grid[i-1][j] < grid[i][j] &&
                grid[i][j-1] < grid[i][j] &&
                grid[i][j+1] < grid[i][j] &&
                grid[i+1][j] < grid[i][j] ){
                    row[j] = "X";
            } else{
                row[j] = grid[i][j];
            };
            row[len-1] = grid[i][len-1]; // last row  value goes the same
            str[i] = row;
        };
    };

    // Last row goes as it is recieved
    var row = new Array(len);
    for(var i = 0 ; i < len ; i++){
        row[i] = grid[len - 1][i]; // first row goes the same
        str[len - 1] = row;
    };

    // join every element in each row
    for(var i = 0 ; i < len ; i++){
        str[i] = str[i].join("");
    };

    // console.log("\nstr");
    // for(var i = 0 ; i < len ; i++){
    //     console.log(i + ".\t" + str[i] + "\n");
    // };

    return str;
}
