//Input
var firstLine = 2; var arr = ["1 2 3", "1 3 2"]; ;

retorno = eval(firstLine, arr);

//Solution
function eval(firstLine, arr){
    var q = firstLine;
    for(var i = 0 ; i < q ; i++){
        var line = arr[i].split(" ").map( x => parseInt(x) );
        var x = line[0]; var y = line[1]; var z = line[2];

        console.log(catAndMouse(x, y, z));
    };

    return "Hola";
};


function catAndMouse(x, y, z){


    return 2;
};
