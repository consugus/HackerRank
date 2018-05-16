//Input
var firstLine = "9"; var secondLine = "10 20 20 10 10 30 50 10 20";

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var ar = secondLine.split(" ").map(x => parseInt(x));
    console.log(sockMerchant(n, ar));

    return "Hola";
};


function sockMerchant(n , ar){
    var colors = new Array(100 + 1);
    var pairs = 0;
    for(var i = 0 ; i < colors.length ; i++){
        colors[i] = 0;
    };

    for(var i = 0 ; i < n ; i++){
        colors[ar[i]]++;
    };


    for(var i = 0 ; i < colors.length ; i++){
        pairs += Math.floor(colors[i]/2);
        console.log("colors[" + i + "]: " + colors[i] + "    pairs: " + pairs);
    };

    return pairs;
};;
