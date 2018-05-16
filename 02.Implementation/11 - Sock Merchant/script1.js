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

    return 2;
};;
