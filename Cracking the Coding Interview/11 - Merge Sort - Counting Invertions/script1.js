//Input
var d = 2;
var n = 5;
var arr1 = [1, 1, 1, 2, 2];
var arr2 = [2, 1, 3, 1, 2];

var counter = 0;

//Solution
function countInversions(n, arr){
    console.log("arr before: " + arr);
    var counter = quicksort(arr, 0, n-1);
    return counter;

};

function quicksort(arr, left, right){
    var i = left;
    var j = right;
    var tmp = 0;
    var pivotidx = (left + right) / 2;
    var pivot = parseInt(arr[pivotidx.toFixed()]);
    console.log("left: " + left + "    right: " + right + "    pivotidx: "  + pivotidx.toFixed() + "    pivot value: " + pivot);
    /* partition */
    do {
        while ((parseInt(arr[i]) < pivot) && (i < right)){ i++ };
        while ((parseInt(arr[j]) > pivot) && (j > left)){  j-- };
        if(i <= j){
            console.log("tmp: " + tmp + "    arr[" + i + "]: " + arr[i] + "    arr[" + j + "]: " + arr[j] + "    arr between: " + arr + "        counter: " + counter);
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            counter++;
            console.log("tmp: " + tmp + "    arr[" + i + "]: " + arr[i] + "    arr[" + j + "]: " + arr[j] + "    arr between: " + arr + "        counter: " + counter + "\n\n");
            i++;    j--;
        };
    }
    while(i <= j);

    /* recursion */
    if (left < j){    quicksort(arr, left, j);    };
    if (i < right){    quicksort(arr, i, right);    };
    console.log("arr after: " + arr);
    //return arr;
    return counter;

};

function countInversions1(n, arr){
    var counter = 0;
    console.log(arr)

    for (var i = 0 ; i < n ; i++){
        for (var j = 0 ; j < n-1 ; j++){
            var temp = 0;
            if (arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                counter++;
            };
        };
    };
    console.log("counter: " + counter);

    //return "Hola";
};


retorno = countInversions(n, arr2);

