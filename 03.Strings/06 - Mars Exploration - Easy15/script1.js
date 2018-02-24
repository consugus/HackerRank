//Input
s = "SOSSPSSQSSOR"; // 3
s = "SOSSOT"; // 1

retorno = marsExploration(s);

//Solution
function marsExploration(s){
    var numberOfChanges = 0;
    for (var i = 0 ; i < s.length ; i+=3){
        if(s[i] != "S"){
            numberOfChanges ++;
        };
        if(s[i+1] != "O"){
            numberOfChanges++;
        };
        if(s[i+2] != "S"){
            numberOfChanges++;
        };
    };
    return numberOfChanges;
};



