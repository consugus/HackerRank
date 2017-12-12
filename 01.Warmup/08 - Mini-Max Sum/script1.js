//Input
var arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr){
    var minimun = 0;
    var maximun = 0;
    //Sort the recieved array in crescending order
    arr.sort();
    for (var i = 0 ; i < arr.length ; i++) {
        if (i < arr.length -1 ){
            minimun += arr[i];
        }
        if (i > 0){
            maximun += arr[i];
        }
        //console.log("i: " + i + "    arr[" + i + "]: " + arr[i] + "    Minimun: " + minimun + "    Maximun: " + maximun);
    }
    // console.log ("\n");
    // console.log("Minimun: " + minimun);
    // console.log ("Maximun: " + maximun);

    return minimun + " " + maximun;
}

var retorno = miniMaxSum(arr);









