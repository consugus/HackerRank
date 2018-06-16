//Input
var firstLine = "7 3"; var secondLine = "1 2 4 5 7 8 10";

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var nd = firstLine.split(" ").map( x => parseInt(x));
    var n = nd[0], d = nd[1];
    var arr = secondLine.split(" ").map( x => parseInt(x) );
    console.log(beautifulTriplets(d, arr));
    return "Hola";
};


function beautifulTriplets(d, arr) {
    var numberOfBeautifulTriplets = 0, len = arr.length;
    for(var i = 0 ; i < len ; i++){
        for(var j = i+1 ; j < len ; j++){
            if( (arr[j] - arr[i]) == d ){
                for(var k = j+1 ; k < len ; k++){
                    if( (arr[k] - arr[j]) == d ){
                        numberOfBeautifulTriplets++;
                    };
                };
            };
        };
    };

    return numberOfBeautifulTriplets;
}
