//Input
var s = "abccddde"; //Original String
//var s = "e";
//var s = "abcedfghijklmnopqrstuvwxyz";
var n = 6; //Number of queries
var x = [1, 3, 13, 5, 9, 10]; //each string to test

retorno = eval(s, n, x);

//Solution
function eval(s, n, x){
    var answer = "Yes";
    var queryes = new Array(27).join("0").split("").map(parseInt);
    queryes[1] = 0;
    //console.log(queryes.length);
    var alphabet = "abcedfghijklmnopqrstuvwxyz";

    for(var i = 0 ; i < s.length ; i++){
        for(var j = 0 ; j < alphabet.length ; j++){
            if(s[i] == alphabet[j]){
                queryes[j]++;
                //console.log(s[i] + " " + queryes[j]);
            };
        };

    };
    var temp = [];
    for(var i = 0 ; i < queryes.length ; i++){
        if(queryes[i] != 0){
            console.log("queryes[" + i + "]: " + queryes[i]);
            for(var j = 1 ; j <= queryes[i] ; j++){
                temp.push( (i+1) * j );
            };
        };

    };
    console.log("queryes: " + queryes);
    console.log("temp: " + temp);


    //return answer;
};



