//Input
var n = 5 ; var arr = [84, 92, 61, 50, 95];

retorno = eval(n, arr);

//Solution
function eval(n, arr){
    console.log(averageOfTopEmployees(arr));
    return "Hola";
};



function averageOfTopEmployees(rating){
    var average = 0;
    var len = rating.length;
    var sum = 0;
    var counter = 0;
    for(var i = 0 ; i < len ; i++){
        if(rating[i] >= 90){
            sum+= rating[i];
            counter++;
        };
    };
    average = sum/counter;
    average = Math.round(average*100);
    average = average/100;
    return parseFloat(average).toFixed(2);
};