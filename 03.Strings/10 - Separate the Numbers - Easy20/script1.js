//Input
var q = 7;                                              // 1 <= q <= 10
var s = ["1234", "91011", "99100", "101103", "010203", "13", "1"];    // 1 <= |s| <= 32

var q = 1;
var s = ["96589218797811259658921879781126"]; // YES 9658921879781125

// var q = 10;
// var s = ["51073756645096775107375664509678", "51073756645096775107375664509668", "96589218797811259658921879781126", "96589218797811259658921879781026", "960567818611458960567818611459", "960567818611458960567818610459", "65651460403999656565146040399966", "65651460403999656565146040389966", "84137510565804148413751056580415", "84137510565804148413751056480415"];
// falla en el 3 número   var s = ["96589218797811259658921879781126"]; // YES 9658921879781125

var q = 10;
var s = ["429496729542949672964294967297", "429496729542949672964294967296", "429496729542949672964294967287", "429496729542949672964294967197", "42949672954294967296429496729", "4294967295429496729642949672", "429496729500000000000000000001", "42949672950123456789", "4294967295000010020030000456789", "4294967295000102003004005"];

retorno = eval(q, s);

//Solution
function eval(q, s){
    for(var i = 0 ; i < q ; i++){
        console.log(separateNumbers(s[i]));
    };
};


function separateNumbers(s){
    var answer = true;
    var second = 0;
    var final = "NO";
    //console.log("s: " + s + "\n\n");

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
            //console.log("first: " + first + "    second: " + second + "    size: " + size);

            answer = areBeautiful(first, second);
            //console.log("areBeautiful: " + areBeautiful(first, second));
            if(!answer){
                break;
            };
            first = second;
            index += size;

            if( (index + size) > s.length){
                break;
            };
        };
        //console.log("    answer    " + answer);
        if(answer && final == "NO"){
            final = "YES " + firstToShow;
        };
    };
    return  final;
};



function areBeautiful(first, second){
    var rule1 = checkRule1(first, second);
    var rule2 = checkRule2(first, second);
    //console.log("rule1: " + rule1 + "    rule2: " + rule2);
    var beautiful = rule1 && rule2 ;
    return beautiful;
};

function checkRule1(first, second){
    // console.log("checkRule1: " + ( parseInt(first) + 1 == parseInt(second) ));
    // console.log(first);
    // console.log(second);
    // console.log(parseInt(first));
    // console.log(parseInt(second));
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




