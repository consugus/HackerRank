//Input
var firstLine = "20 23 6"; // 2

retorno = eval(firstLine);

//Solution
function eval(firstLine){
    var ijk = firstLine.split(" ").map( x => parseInt(x));
    var i = ijk[0]; var j = ijk[1]; var k = ijk[2];
    console.log(beautifulDays(i, j, k));
    return "Hola";
};


function beautifulDays(i, j, k) {
    var count = 0;



    return count;
}
