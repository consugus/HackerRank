//Input
var t = 2;
//var arr = [4, 5, [1, 4, 5, 3, 2], 4, 4, [2, 2, 4, 3]];
money = 4;
numberOfFlavors = 5;
var arr = [1,4,5,3,2];

//Solution
function eval(money, numberOfFlavors, arr){
    var hash = new Array(numberOfFlavors+2).join(0).split("").map(parseInt);
    hash[1] = 0;
    console.log("hash: " + hash + "    length: " + hash.length + "\n\n");

    for (var i = 0 ; i < numberOfFlavors; i++){
        var index = arr[i];

        console.log("money: " + money + "    cost: " + index + "    " + (hash[money-index] !== 0));

        if( (hash[money - index]) !== 0){
            console.log("respuesta: " + hash[(money - index)] + " " + arr[i]);
            break;
        }
        if(hash[index] == 0){
            hash[index] = arr[i];
        };

        console.log("i: " + i + "    cost: " + index + "    hash: " + hash);
        //console.log("hash[" + arr[i] + "]: " + hash[(arr[i])] + "    arr[" + i + "]: " + arr[i] + "\n\n");
    };








    return "Hola";
};



retorno = eval(money, numberOfFlavors, arr);

