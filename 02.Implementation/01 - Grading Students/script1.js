//Input
var n = 4;
var grades = [73, 67, 38, 33]

//Solution
function solve(grades){
    var long = grades[0];
    var gradesRounded = [];
    for (var i = 0 ; i < grades.length ; i++){
        if(grades[i] >= 38){
            var nextMultiple = findNextMultiple(grades[i]);
            if(Math.abs(grades[i] - nextMultiple) < 3){
                //nextMultiple goes
                gradesRounded[i] = nextMultiple;
            } else{
                //grade[i] goes
                gradesRounded[i] = grades[i];
            }
        } else{
            //same grade goes because it was lower than 38
            gradesRounded[i] = grades[i];
        }
    }
    return gradesRounded;
}

function findNextMultiple(n){
    for (var i = 0 ; i <= 4; i++){
        if((n+i) % 5 == 0){
            return n+i;
        }
    }
}

var retorno = solve(grades);









