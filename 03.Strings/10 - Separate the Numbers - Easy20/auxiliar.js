//Input
var q = 7;                                              // 1 <= q <= 10
var s = ["1234", "91011", "99100", "101103", "010203", "13", "1"];    // 1 <= |s| <= 32

var q = 1;
var s = ["91011"]; //123456789

retorno = eval(q, s);

//Solution
function eval(q, s){
    var answer = "NO";

    console.log("s: " + s + "\n\n");

    for(var i = 0 ; i < q ; i++){
        var answer = separateNumbers(s[i])
    };

    console.log("\nlast answer: " + answer);
    return answer;
};


function separateNumbers(s){
    var answer = true;
    var second = 0;
    var final = "No";

    for(var step = 1 ; step <= Math.ceil(s.length/2) ; step++){
        var first = s.slice(0, step);
        var firstToShow = first;
        var index = first.length;
        var size = step;
        for(var i = 0 ; i < s.length ; i++){
            
            if(areAllNines(first)){
                size++;
            };
            second = s.slice(index, (index + size));

            console.log("first: " + first + "    second: " + second + "    size: " + size);

            //Here goes the analisys of the pair of numbers
            answer = areBeautiful(first, second);
            if(!answer){
                break;
            };

            first = second;
            index += size;
            if( (index + size) > s.length){
                break;
            };
        };

        console.log("    answer    " + answer);
        if(answer && final == "No"){
            final = firstToShow + " " + answer
        };
    };
    return  final;
};



function areBeautiful(first, second){
    var rule1 = checkRule1(first, second);
    var rule2 = checkRule2(first, second);
    var beautiful = rule1 && rule2 ;
    return beautiful;
};

function checkRule1(first, second){
    return (parseInt(first) + 1 == parseInt(second));
};

function checkRule2(first, second){
    return (first[0] != "0" && second[0] != "0");
};

function areAllNines(first){
    var answer = true;
    for(var i = 0 ; i < first.length ; i++){
        if(first[i] != "9"){
            answer = false;
            break;
        };
    };
    return answer;
};