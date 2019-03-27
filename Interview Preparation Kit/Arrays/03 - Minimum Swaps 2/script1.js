

//Input
// var arr = [7, 1, 3, 2, 4, 5, 6]; // 5
// var arr = [4,3, 1, 2] // 3
var arr = [2, 3, 4, 1, 5]; // 3

var retorno = minimumSwaps(arr);

//Solution
function minimumSwaps(arr) {
    // console.log(arr);
    var min = Math.min.apply(null, arr);
    var counter = 0;

    for (var i = 0; i < arr.length ; i++) {

        var index = arr.indexOf(min);

        if (arr[i] != min) {
            // swap i x index in arr
            var tmp = arr[i];
            arr[i] = arr[index];
            arr[index] = tmp;

            counter++;
        };

        min += 1;
        // console.log("arr: " + arr + "\ti: " + i + "\tmin: " + min + "\tindex: " + index);
    };
    console.log(counter);
}; // end eval