//Input
var s = "abccddde"; //Original String
//var s = "e";
//var s = "abcedfghijklmnopqrstuvwxyz";
var n = 6; //Number of queries
//var x = [1, 3, 12, 5, 9, 10]; //each string to test
var x = 9;

retorno = getWeights(s, n, x);

//Solution
function getWeights2(s){
    return s.match(/(a-z)\1*/g).reduce(function(weights, next){
        var weight = next.charCodeAt(0) - 96;
        for (var i = 1 ; i <= next.length ; i++){
            weights.push(weight * i);
        };
        return weights;
    }, []);
};



function getWeights(s, n, x){
    var answer = "Yes";
    var queryes = new Array(27).join("0").split("").map(parseInt);
    queryes[1] = 0;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    for(var i = 0 ; i < s.length ; i++){
        for(var j = 0 ; j < alphabet.length ; j++){
            if(s[i] == alphabet[j]){
                queryes[j]++;
            };
        };

    };

    var value = 1;
    var weights = [];
    for(var i = 0 ; i < queryes.length ; i++){
        if(queryes[i] != 0){
            for(var j = 1 ; j <= queryes[i] ; j++){
                weights.push( value * j );
            };
        };
        value++;
    };
    //console.log("queryes: " + queryes);
    //console.log("weights: " + weights.sort(function(a,b){return a-b}));

    if(weights.indexOf(x) == -1){
        answer = "No"
    };

    // for(var i = 0 ; i < n ; i++){
    //     if(weights.indexOf(x[i]) == -1 ){
    //         console.log(x[i] + "   No");
    //         continue;
    //     };
    //     console.log(x[i] + "   Yes");
    // };



    return answer;
};



