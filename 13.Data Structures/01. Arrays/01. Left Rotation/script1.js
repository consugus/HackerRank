//Input
var firstLine = "5 4", secondLine = "1 2 3 4 5"; // 5 1 2 3 4

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var nd = firstLine.split(" ").map( x => parseInt(x) );
    var n = nd[0], d = nd[1];
    var arr = secondLine.split(" ").map( x => parseInt(x) );
    console.log(leftRotation(arr, d));
    return "Hola";
};


function leftRotation(arr, d){
    var len = arr.length
    var arrayRotated = "";
    // console.log("arrayRotated: " + arrayRotated);
    for(var i = 0 ; i < len ; i++){
        if( (i + d) < len){
            arrayRotated += arr[i + d];
        } else{
            arrayRotated +=arr[i+ d - len];
        };
        if(i != len -1){
            arrayRotated += " ";
        };
    };

    return arrayRotated;
}
