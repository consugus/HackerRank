//Input
var arr = ["cde", "abc"]; // 4

//var arr = ["bacdc", "dcbac"]; // 0

retorno = eval(arr);

//Solution
function eval(arr){
    console.log(makingAnagrams(arr[0], arr[1]));
};

function makingAnagrams(s1, s2){
    //console.log("s1: " + s1 + "    s2: " + s2 + "\n\n");
    var deletions = 0;
    var hashS1 = new Array(27).join("0").split("").map(parseInt); hashS1[1] = 0;
    var hashS2 = new Array(27).join("0").split("").map(parseInt); hashS2[1] = 0;
    //console.log("hashS1: " + hashS1 + "\nhashS2: " + hashS2);

    var len = s1.length;
    for(var i = 0 ; i < len ; i++){
        index = s1.charCodeAt(i)-97;
        //console.log("code: " + index);
        hashS1[index]++;
    };
    len = s2.length;
    for(var i = 0 ; i < len ; i++){
        index = s2.charCodeAt(i)-97;
        //console.log("code: " + index);
        hashS2[index]++;
    };
    //console.log("hashS1: " + hashS1 + "\nhashS2: " + hashS2);

    for(var i = 0 ; i < hashS1.length ; i++){
        if(hashS1[i] != hashS2[i]){
            diff = Math.abs( hashS1[i] - hashS2[i] );
            deletions += diff;
            //console.log("diff: " + diff + "    deletions: " + deletions);
        };
    };
    return deletions;

};

