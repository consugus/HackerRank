//Input

//          Syncronous mode (deprecated)
var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
archivoTxt.open("GET", "TestCases/TestCase05-Input.txt", false);   // specifies the type of request; parameters:  Method, path/file, Async
archivoTxt.send();                          // execute the request
var contenido = archivoTxt.responseText;
// console.log("contenido: " + contenido);     // display the response


// #region         Asyncronous mode
// var archivoTxt = new XMLHttpRequest();      // objet that requests data from the server
// archivoTxt.open("GET", "datos.txt", true);   // specifies the type of request; parameters:  Method, path/file, Async
// archivoTxt.send();                          // execute the request
// archivoTxt.onreadystatechange = function(){
//         var contenido = archivoTxt.responseText;
//         console.log("contenido: " + contenido);     // display the response
// };
// #endregion

retorno = evaluate(contenido);

//Solution
function evaluate(contenido){
    contenido = contenido.split("\n");
    // console.log("contenido: " + contenido + "\n\n");
    var queries = contenido.shift();

    for(var i = 0 ; i < queries ; i++){
        var grid = []; // new Array (size + 1);
        var size = contenido.shift();
        for(var j =  0 ; j < size ; j++){
            grid.push(  contenido.shift().split("\n")  );
        };
        console.log( gridChallenge(grid));
    };

};


function gridChallenge(grid) {
    // console.log("grid: " + grid);
    var len = grid.length;
    for(var i = 0 ; i < len ; i++){
        var row = [];
        var row = grid[i]; // console.log("row raw: " + row);
        row = row.join("").split(""); // console.log("row splitted: " + row);
        // row = row.split(/(?!$)/u); console.log("row splitted: " + row);
        row.pop(row.length-1); // console.log("row popped: " + row);
        row.sort(); // console.log("row sorted: " + row);
        grid[i] = row;
    };
    // console.log("grid: " + grid);
    for(var i = 0 ; i < len ; i++){ // row
        for(var j = 0 ; j < len -1 ; j++){
            // console.log("grid["+j+"]["+i+"]: " + grid[j][i] + "\tgrid["+(j+1)+"]["+(i)+"]: " + grid[j+1][i] + "\t" + (grid[j][i] > grid[j+1][i]) );
            if(  (grid[j][i] > grid[j+1][i])  ){
                return "NO";
            };
        };
    };
    return "YES";
}
