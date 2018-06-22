//Input
var firstLine =  "5", secondLine = "2, 3, 4, 5, 6"; // 4
var firstLine =  "2", secondLine = "1 2"; //  NO

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var B = secondLine.split(" ").map( x => parseInt(x) );
    console.log(fairRations(B));
    return "Hola";
};


function fairRations(B) {
    var minNum = 0;



    return minNum
}
