//Input     // 1 <= n <= 100
var n = 3;      var password ="Ab1";            // 3
//var n = 11 ;    var password = "#HackerRank";   // 1



retorno = minimumNumber(n, password);

//Solution
function minimumNumber(n, password){
    var answer = 0;
    var lengthEnough = isLengthEnough(password); var charactersToLength = 0;
    var num = 1; var lower = 1; var upper = 1; var spcChar = 1;

    if(!lengthEnough){
        charactersToLength = 6 - password.length;
    };

    for(var i = 0 ; i < n ; i++){

        if(num == 1){
            num = hasNumber(password[i]);
        };

        if(lower == 1){
            lower = hasLower(password[i]);
        };

        if(upper == 1){
            upper = hasUpper(password[i]);
        };

        if(spcChar == 1){
            spcChar = hasSpcChar(password[i]);
        };

    };
    //console.log("password: " + password + "\n\n");
    //console.log("charactersToLength: " + charactersToLength + "\n" + "\nnum:                " + num + "\nlower:              " + lower + "\nupper:              " + upper + "\nspcChar:            " + spcChar + "\n\n");

    answer = Math.max(charactersToLength, (num + lower + upper + spcChar) );
    return answer;
};

function isLengthEnough(password){
    var answer = false;
    if(password.length >= 6){
        answer = true;
    };
    return answer;
};

function hasNumber(char){
    var numbers = "0123456789";
    var answer = 1;
    for(var i = 0 ; i < numbers.length ; i++){
        if(numbers[i] == char){
            answer = 0;
            break;
        };
    };
    return answer;
};

function hasLower(char){
    var lower_case = "abcdefghijklmnopqrstuvwxyz";
    var answer = 1;
    for(var i = 0 ; i < lower_case.length ; i++){
        if(lower_case[i] == char){
            answer = 0;
            break;
        };
    };
    return answer;
};

function hasUpper(char){
    var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var answer = 1;
    for(var i = 0 ; i < upper_case.length ; i++){
        if(upper_case[i] == char){
            answer = 0;
            break;
        };
    };
    return answer;
};

function hasSpcChar(char){
    var special_characters = "!@#$%^&*()-+";
    var answer = 1;
    for(var i = 0 ; i < special_characters.length ; i++){
        if(special_characters[i] == char){
            answer = 0;
            break;
        };
    };
    return answer;
};
