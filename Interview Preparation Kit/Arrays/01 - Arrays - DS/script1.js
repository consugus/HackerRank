//Input
var firstLine = "4", secondLine = "1 4 3 2"; // 2 3 4 1


retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var a = secondLine.split(" ").map( x => parseInt(x) );
    console.log(reverseArray(a));
    return "Hola";
};


function reverseArray(a) {
    var len = a.length, reverseA = [];
    console.log("a: " + a);

    for(var i = 0 ; i < len ; i++){
        reverseA.push(a[len - i - 1]);
    };

    return reverseA;
}
