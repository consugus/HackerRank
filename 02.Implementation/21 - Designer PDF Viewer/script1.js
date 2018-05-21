//Input
var firstLine = "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5"; var secondLine = "abc"; // 9
var firstLine = "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7"; var secondLine = "zaba"; // 28

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var heights = firstLine.split(" ").map( x => parseInt(x));
    var word = secondLine;

    console.log(designerPdfViewer(heights, word));
    return  "Hola";
};


function designerPdfViewer(heights, word) {
    var area = 0;

    return area;
}
