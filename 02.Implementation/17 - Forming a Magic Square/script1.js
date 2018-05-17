//Input
var firstLine = "5 3 4"; var secondLine = "1 5 8"; var thirdLine = "6 4 2"; // 7
// var firstLine = "4 9 2"; var secondLine = "3 5 7"; var thirdLine = "8 1 5"; // 1
// var firstLine = "4 8 2"; var secondLine = "4 5 7"; var thirdLine = "6 1 6"; // 4

retorno = eval(firstLine, secondLine, thirdLine);

//Solution
function eval(firstLine, secondLine, thirdLine){
    var s = [];
    var tmp = firstLine.split(" "). map( x => parseInt(x)); s.push(tmp);
    var tmp = secondLine.split(" "). map( x => parseInt(x)); s.push(tmp);
    var tmp = thirdLine.split(" "). map( x => parseInt(x)); s.push(tmp);

    console.log(formingMagicSquare(s));
    return "Hola"
};

function formingMagicSquare(s){

    return 2;
};


