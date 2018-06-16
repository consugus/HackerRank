//Input
var firstLine = "5"; var secondLine = ["ab", "bb", "hefg", "dhck", "dkhc"]; //
//"ba" "no answer" "hegf" "dhkc" "hcdk"
// var firstLine = "1;"; var secondLine = ["dhck"]; // dhkc
// var firstLine = "1;"; var secondLine = ["dkhc"]; // hcdk

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var t = parseInt(firstLine);
    for(var i = 0 ; i < t ; i++){
        console.log(biggerIsGreater(secondLine[i]));
    };

    return "Hola";
};


function biggerIsGreater(w) {
    var newW = "", len = w.length, sufixIndex = -1, pivot = -1;
    var smallest = 0, diff = Number.MAX_SAFE_INTEGER;

    // Identify longest non-increasing suffix
    for(var i = len - 1 ; i > 0 ; i-- ){
        if(w[i] > w[i-1]){
            sufixIndex = i;
            break;
        };
    };
    // console.log("sufixIndex: " + sufixIndex);

    //identify the pivot
    if(sufixIndex == -1){
        return "no answer";
    } else{
        pivot = i-1;
    };

    // identify the smallest element in the suffix greater than pivot
    for(var i = len-1 ; i > sufixIndex - 1; i--){
        if(  Math.abs(w.charCodeAt(pivot) - w.charCodeAt(i))  < diff && w[i] > w[pivot]){
            diff = Math.abs(w.charCodeAt(pivot) - w.charCodeAt(i));
            smallest = i;
        };
    };

    //swap pivot with smallest
    var tmp = w[pivot];
    var prefix = w.slice(0, pivot);
    prefix += w[smallest];
    var suffix = w.slice(pivot+1, len);
    suffix = suffix.replace(w[smallest], tmp);
    suffix = suffix.split("");
    suffix.sort();
    suffix = suffix.join("");
    newW = prefix + suffix;

    return newW;
}
