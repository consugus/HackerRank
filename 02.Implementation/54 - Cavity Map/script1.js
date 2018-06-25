//Input

var firstLine = "4", secondLine = ["1112", "1912", "1892", "1234"]; // "1112", "1X12", "18X2", "1234"


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
<<<<<<< HEAD
    var len = grid.length, str = [];
=======
    var len = grid.length, str = "";
    //console.log(grid[0][1] + 1);
>>>>>>> f34ca3d6c6d278d1f1710355ef5e16bf6f9ee19e

    console.log("grid");
    for(var i = 0 ; i < len ; i++){
        console.log(i + ".\t" + grid[i]);
    };

    


    return str;
}
