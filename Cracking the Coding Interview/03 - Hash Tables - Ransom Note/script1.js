//Input

//Sample input 0
var m = 6;
var n = 4;
var a = "give me one grand today night"; //give me one grand today night
var b = "give one grand today";
//Sample Expected Output 0 --> YES

//Sample input 1
// var m = 6;
// var n = 5;
// var a = "two times three is not four";
// var b = "two times two is four";
//Sample Expected Output 0 --> NO (The two word should occur 2 times in magazine)

//Solution
function solve(m, n, a, b){
    var solution = "Yes";
    var arrayA = [];
    var arrayB = [];

    // loads arrayA with the words contained in a
    var temp = "";
    for (var i =  0 ; i < a.length ; i++){
        // goes over array a until finding a blanck space
        if(a[i] != " "){
            temp += a[i];
        }
        else{// when a blanck space appears, a complete word has been found
            if(arrayA[getHash(temp)] == undefined){
                arrayA[getHash(temp)] = [temp];
            } else{
                arrayA[getHash(temp)].push(temp);
            }
            temp = "";
        };
    };
    // add LAST element in temp to arrayA
    if(arrayA[getHash(temp)] == undefined){
        arrayA[getHash(temp)] = [temp];
    } else{
        arrayA[getHash(temp)].push(temp);
    }

    //loads arrayB with the words contained in b
    var temp = "";
    for (var i =  0 ; i < b.length ; i++){
        if(b[i] != " "){
            temp += b[i];
        }
        else{// when a blanck space appears, a complete word has been found
            if(arrayB[getHash(temp) == undefined]){
                arrayB = [temp];
            } else {
                arrayB.push(temp);
            }
            temp = "";
        };
    };
    arrayB.push(temp); // add last element in temp to arrayB

    //console.log("arrayA.length: " + arrayA.length + "    arrayA: " + arrayA);
    //console.log("arrayB.length: " + arrayB.length + "    arrayB: " + arrayB);

    //Evaluation if arrayB is included in arrayA
    for(var i = 0 ; i < n ; i++){// i runs over arrayB
        var position = getHash(arrayB[i]);
        if(arrayA[position] == undefined){
            solution = "No";
            break;
        }
        var size = arrayA[position].length;
        if(solution == "No"){
            break;
        };
        for(var j = 0 ; j < size ; j++){// j runs over arrayA
            if(arrayA[position][j] == undefined ||
                arrayA[position][j] == null ||
                arrayA[position][j] == ""){
                    solution =  "No";
                    break;
            };
            if(arrayA[position][j] == arrayB[i]){
                arrayA[position][j] = "";
                continue;
            };// end if
        };// end j (over arrayA)
    };// end i (over arrayB)

    //console.log("Solution: " + solution);
    return solution;
}

function getHash(str){
//returns the position where all words are going to be stored in arrayHash
    var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIKKLMNOPQRSTUVWXYZ";
    var key1 = 0;
    var key2 = 0;
    var kk = "";
    for(var i = 0 ; i < alphabet.length ; i++){
        if(alphabet[i] == str[0]){
            key1 = i;
        };
        if(alphabet[i] == str[1]){
            key2 = i;
        };
    };
    kk = "" + key1 + key2;
    //console.log("str: " + str + "    key1: " + key1 + "    alphabet[" + key1 + "]: " + alphabet[key1] + "    key2: " + key2 + "    alphabet[" + key2 + "]: " + alphabet[key2] + "    kk: " + kk);
    return parseInt(kk);
};




var retorno = solve(m, n, a, b);
