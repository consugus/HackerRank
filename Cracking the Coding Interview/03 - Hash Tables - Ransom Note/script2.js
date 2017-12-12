//Input

//Sample input 0
var m = 6;
var n = 4;
var a = "give me one grand today night"; //give me one grand today night
var b = "give one grand today";//give one grand today
//Sample Expected Output 0 --> YES

//Sample input 1
// var m = 6;
// var n = 5;
// var a = "two times three is not four";//two times three is not four
// var b = "two times is four two";//two times two is four
//Sample Expected Output 0 --> NO (The two word should occur 2 times in magazine)

//Solution
function solve(m, n, a, b){
    var arrayA = [];
    var arrayB = [];
    var pos = 0;
    var temp = "";

    // loads arrayA with the words contained in a
    for (var i =  0 ; i < a.length ; i++){
        // goes over array a until finding a blanck space
        if(a[i] != " "){
            temp += a[i];
        }
        else{// when a blanck space appears, a complete word has been found
            pos = getHash(temp);
            //console.log("temp: " + temp);
            //console.log("getHash(temp): " + getHash(temp));
            if(arrayA[pos] == undefined){
                arrayA[pos] = 1;
                //console.log("arrayA[" + pos + "}: " + arrayA[pos]);
            } else{
                arrayA[pos] ++;
                //console.log("arrayA[" + pos + "}: " + arrayA[pos]);
            };
            temp="";
        };
    };
    // add LAST element in temp to arrayA
    pos = getHash(temp);
    //console.log("temp: " + temp + "    pos: " + pos);
    if(arrayA[pos] == undefined){
        arrayA[pos] = 1;
        //console.log("arrayA[" + pos + "}: " + arrayA[pos]);
    } else{
        arrayA[pos] ++;
        //console.log("arrayA[" + pos + "}: " + arrayA[pos]);
    };

    //compare each element in arrayB against arrayA
    temp = "";
    //console.log("\n\n");
    for(var i = 0 ; i < b.length ; i++){
        if(b[i] != " "){
            temp += b[i];
        } else{
            pos =getHash(temp);
            //console.log("temp: " + temp);
            //console.log("getHash(temp): " + getHash(temp));
            if(arrayA[pos] == undefined || arrayA[pos] == 0){// arrayA[pos] == undefined || arrayA[pos] == 0
                return "No";
            }else{
                arrayA[pos] --;
                //console.log("arrayA[" + pos + "}: " + arrayA[pos]);
            };
            temp = "";
        };
    };

    //compare last element
    pos = getHash(temp);
    //console.log("temp: " + temp + "    pos: " + pos);
    if(arrayA[pos] == undefined || arrayA[pos] == 0){
        return "No";
    }else{
        arrayA[pos] --;
        //console.log("arrayA[" + pos + "}: " + arrayA[pos]);
    };
    return "Yes";
}



function getHash(str){
    //returns the position where all words are going to be stored in arrayHash
        var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIKKLMNOPQRSTUVWXYZ";
        var key1 = 0;
        var key2 = 0;
        var kk = "";
        for(var j = 0 ; j < str.length ; j++){
            for(var i = 0 ; i < alphabet.length ; i++){
                if(str[j] ==alphabet[i]){
                    //console.log("i:" + i);
                    kk += i;
                };
            };
        };
        return parseInt(kk);
    };





var retorno = solve(m, n, a, b);
