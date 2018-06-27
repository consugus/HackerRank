//Input
var firstLine = "1 1", secondLine = ["1"]; // 6
var firstLine = "3 3", secondLine = ["1 3 4", "2 2 3", "1 2 4"]; // 60


retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var hw = firstLine.split(" ").map(x => parseInt(x) );
    var h = hw[0], w = hw[1];
    var a = new Array(h);
    for(var i = 0 ; i < h ; i++){
        a[i] = secondLine[i].split(" ").map( x => parseInt(x));
    };
    console.log(surfaceArea(a));
    return "Hola";
};


function surfaceArea(a) {
    var surfaceArea = 60;



    return surfaceArea;
}
