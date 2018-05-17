//Input
var firstLine = "10 2 3";   var secondLine = "3 1"; var thirdLine = "5 2 8"; // 9
var firstLine = "5 1 1";    var secondLine = "4";   var thirdLine = "5"; // -1

retorno = eval(firstLine, secondLine, thirdLine);

//Solution
function eval(firstLine, secondLine, thirdLine){
    var tmp = firstLine.split(" ").map(x => parseInt(x));
    b = tmp[0];
    n = tmp[1];
    m = tmp[2];
    var keyboards = secondLine.split(" ").map( x => parseInt(x) );
    var drives = thirdLine.split(" ").map( x => parseInt(x) );

    console.log(getMoneySpent(keyboards, drives, b));
    return "Hola";
};


function getMoneySpent(keyboards, drives, b){
    var n = keyboards.length;
    var m = drives.length;
    var maxBuy = -1;
    for(var i = 0 ; i < n ; i++){
        for(var j = 0 ; j < m ; j++){
            if(i == 0 && j == 0 ){
                if(keyboards[i] + drives[j] <= b){
                    maxBuy = keyboards[i] + drives[j];
                };
            } else if( keyboards[i] + drives[j] <= b && keyboards[i] + drives[j] > maxBuy){
                maxBuy = keyboards[i] + drives[j];
            };
            //console.log("keyboards[" + i + "]: " + keyboards[i] + "    drives[" + j + "]: " + drives[j] + "    product: " + (keyboards[i] * drives[j]) + "    maxBuy: " + maxBuy);
        };
    };

    return maxBuy;
};
