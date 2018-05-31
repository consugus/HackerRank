//Input
var firstLine = "9 6 2015"; var secondLine = "6 6 2015";

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var tmp = firstLine.split(" ").map( x => parseInt(x));
    var actual = {
        d: tmp[0],
        m: tmp[1],
        y: tmp[2]
    };
    tmp = secondLine.split(" ").map( x => parseInt(x));
    var expected = {
        d: tmp[0],
        m: tmp[1],
        y: tmp[2]
    };
    // console.log(libraryFine(d1, m1, y1, d2, m2, y2));
    console.log(libraryFine(actual, expected));
    return "Hola";
};


function libraryFine(actual, expected) {
    console.log("actual Date: " + actual.d + "/" + actual.m + "/" + actual.y);
    console.log("expected Date: " + expected.d + "/" + expected.m + "/" + expected.y);
    var fine = 0;


    return fine;
}
