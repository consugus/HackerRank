//Input
var d = 2;
var n = 5;
var arr1 = [1, 1, 1, 2, 2];
var arr2 = [2, 1, 3, 1, 2];
var arr3 = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];

var counter = 0;
var swaps = 0;

retorno = countInversions(n, arr2);

//Solution
function countInversions(n, arr){
    //console.log("arr before: " + arr);
    //var counter = quicksort(arr, 0, n-1);
    return mergeSort(arr);
};




// Split the array into halves and merge them recursively
function mergeSort (arr) {
    if (arr.length === 1) {
      // return once we hit an array with a single item
      return arr
    }

    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side
    console.log("arr: " + arr + "    middle:" + middle + "    left: " + left + "    right: " + right);

    return merge(mergeSort(left), mergeSort(right));
  }

  // compare the arrays item by item and return the concatenated result
  function merge (left, right) {

    let result = []
    let indexLeft = 0
    let indexRight = 0
    var swaps = 0;

    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {

        result.push(left[indexLeft]);
        indexLeft++;
      } else {
        // swaps++;
        // console.log("swapess: " + swaps);
        result.push(right[indexRight]);
        indexRight++;
      }
    }

    result = result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
    console.log("result: " + result + "\n\n");
    return result;
  }





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




