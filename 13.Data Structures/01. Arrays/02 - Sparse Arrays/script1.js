//Input
var firstLine = "4", secondLine = ["aba", "baba", "aba", "xzxb"], thirdLine = "3", fourthLine = ["aba", "xzxb", "ab"];
var firstLine = "3", secondLine = ["def", "de", "fgh"], thirdLine = "3", fourthLine = ["de", "lmn", "fgh"];
var firstLine = "13", secondLine = ["abcde", "sdaklfj", "asdjf", "na", "basdn", "sdaklfj", "asdjf", "na", "asdjf", "na", "basdn", "sdaklfj", "asdjf"], thirdLine = "5", fourthLine = ["abcde", "sdaklfj", "asdjf", "na", "basdn"];

// var firstLine = "4", secondLine = ["aba", "baba", "aba", "xzxb"], thirdLine = "1", fourthLine = ["aba"];


retorno = eval(firstLine, secondLine, thirdLine, fourthLine);


//Solution
function eval(firstLine, secondLine, thirdLine, fourthLine){
    var n = parseInt(firstLine);
    var strings = secondLine;
    var q = parseInt(thirdLine);
    var queries = fourthLine;

    // console.log("n: " + n + "\tstrings: " + strings + "\nsq: " + q + "\tqueries: " + queries);

    console.log(matchingStrings(strings, queries));
    return "Hola";
};

function matchingStrings(strings, queries) {
    var n = strings.length, q = queries.length;
    var results = new Array(q);
    for(var i = 0 ; i < q ; i++){
        results[i] = 0;
    };

    for(var i = 0 ; i < q ; i++){ // searches queries
        for(var j = 0 ; j < n ; j++){ // searches strings
            if(queries[i] == strings[j]){
                results[i]++;
            };
        };
    };

    return results;
}

