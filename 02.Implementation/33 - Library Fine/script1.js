//Input

// actual / expected
var firstLine = "9 6 2015"; var secondLine = "6 6 2015"; // 45
// var firstLine = "2 7 1014"; var secondLine = "1 1 1015"; // 0



retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var tmp = firstLine.split(" ").map( x => parseInt(x));
    var d1 =  tmp[0], m1 = tmp[1], y1=  tmp[2];
    tmp = secondLine.split(" ").map( x => parseInt(x));
    var d2 = tmp[0], m2 = tmp[1], y2 = tmp[2];

    console.log(libraryFine(d1, m1, y1, d2, m2, y2));
    return "Hola";
};


function libraryFine(d1, m1, y1, d2, m2, y2) {
    var fine = 0;

    if( (y1 < y2 || (y1 == y2 && m1 < m2) || (y1 == y2 && m1 == m2 && d1 < d2)) ){
        return fine;
    };
    if( (y1 - y2) > 0 ){
        return 10000;
    };
    if( (m1 - m2) > 0 ){
        return ( (m1 - m2) * 500);
    };
    if( (d1 - d2) > 0 ){
        return ( (d1 - d2) * 15);
    };
    return fine;
}
