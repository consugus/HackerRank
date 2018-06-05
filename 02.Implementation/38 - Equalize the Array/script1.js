//Input
var firstLine = "5"; var secondLine = "3 3 2 1 3"; // 2
var firstLine = "78"; var secondLine = "24 29 70 43 12 27 29 24 41 12 41 43 24 70 24 100 41 43 43 100 29 70 100 43 41 27 70 70 59 41 24 24 29 43 24 27 70 24 27 70 24 70 27 24 43 27 100 41 12 70 43 70 62 12 59 29 62 41 100 43 43 59 59 70 12 27 43 43 27 27 27 24 43 43 62 43 70 29"; 
// 37
var firstLine = "88"; var secondLine = "69 86 100 69 55 83 15 69 86 69 79 16 86 24 24 55 16 69 100 79 16 83 83 79 15 15 86 16 55 18 100 100 86 16 83 79 86 83 100 83 55 15 86 86 55 100 55 18 55 100 86 69 83 24 16 55 100 16 100 24 16 55 15 79 16 18 16 16 83 83 69 18 100 79 16 24 79 16 69 86 83 79 83 18 15 100 24 83";
// 75



retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var arr = secondLine.split(" ").map( x => parseInt(x) );
    console.log(equalizeArray(arr));
    return "Hola";
};


function equalizeArray(arr) {
    var deletions = 0, len = arr.length, max = 0;
    var frec = new Array(101);
    for(var i = 0 ; i < frec.length ; i++){
        frec[i] = 0;
    };
    for(var i = 0 ; i < len ; i++){
        frec[ arr[i] ]++;
    };

    for(var i = 0 ; i < frec.length ; i++){
        if(frec[i] > frec[max]){
            max = i;
        };
    };

    var total = 0;
    for(var i = 0 ; i < frec.length ; i++){
        total += frec[i];
    };

    for(var i = 0 ; i < frec.length ; i++){
        if(i != max && frec[i] != 0){
            deletions+= frec[i];
        };
    };

    return deletions;
}
