//Input
var n = 10;
var doors = [0, 1, 1, 0, 1, 1, 1, 1, 0, 0]; //3 6
// 0 means unlocked, 1 means locked

//Solution
function revisedRussianRoulette(n, doors){

    var swapsToZeroWithAutom = swapToZeroWithAutomation(n, doors);
    var swapsToZero = swapToZero(n, doors);

    console.log(swapsToZeroWithAutom + " " + swapsToZero);
    return "Hola";
};

function swapToZeroWithAutomation(n, doors){
    var numberOfSwaps = 0;
    for(var i = 0 ; i < n ; i++){
        if (doors[i] == 1){
            numberOfSwaps++;
            if(doors[i+1] == 1 ){
                i++;
            };
        };
    };
    return numberOfSwaps;
};

function swapToZero(n, doors){
    var numberOfSwaps = 0;
    for(var i = 0 ; i < n ; i++){
        if(doors[i] == 1){
            numberOfSwaps++;
        };
    };
    return numberOfSwaps;
};


retorno = revisedRussianRoulette(n, doors);

