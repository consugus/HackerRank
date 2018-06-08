//Input
var firstLine = "2"; var secondLine = "2"; var thirdLine =  [ ["1 1", "1 1"], ["0 2", "1 1"] ];
// Possible Impossible

var firstLine = "1"; var secondLine = "2" ; var thirdLine = [ ["1 1",  "1 1" ] ];



retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var q = parseInt(firstLine);

    for(var i = 0 ; i < q ; i++){
        var tmp = secondLine[i].split(" ").map( x => parseInt(x) );
        //console.log("tmp: " + tmp);
        var cant = tmp.shift();
        //console.log( "q: " + q + "\ttmp: " + tmp);
        
        var container = [cant+1];
        for(var j = 0 ; j < cant*4 ; j = 2){
            container[j] = [ secondLine[i][j+1], secondLine[i][j+2] ]
        };
        organizingContainers(container);
    };

    return "Hola";
};


function organizingContainers(container) {
    console.log("container: " + container);

}
