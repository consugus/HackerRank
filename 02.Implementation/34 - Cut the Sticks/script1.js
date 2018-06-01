//Input
var firstLine = "6"; var secondLine = "5 4 4 2 2 8";        // 6 4 2 1
var firstLine = "8"; var secondLine = "1 2 3 4 3 3 2 1";    // 8 6 4 1

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var arr = secondLine.split(" ").map( x => parseInt(x) );
    console.log(cutTheSticks(arr));
    return "Hola";
};


function cutTheSticks(arr) {
    var sticksCut = [], len = arr.length;
    arr.sort(function ( a, b){return a-b});
    var size = 0;

    for(var i = 0 ; i < len ; i++){
        if(arr[i] != 0){
            size = arr[i];
        } else{
            continue;
        };

        var count = 0;
        for(var j = 0 ; j < len ; j++){
            if( (arr[j] - size) >= 0 ){
                count++;
                arr[j] -= size;
            };
        };
        sticksCut.push(count);
    };

    return sticksCut;
}
