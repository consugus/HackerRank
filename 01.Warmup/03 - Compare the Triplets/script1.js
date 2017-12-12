a0 = 5; a1 = 6; a2 = 7;
b0 = 3; b1 = 6; b2 = 10;


function solve(a0, a1, a2, b0, b1, b2){
    var A = [];
    var B = [];
    A.push(a0);
    A.push(a1);
    A.push(a2);

    B.push(b0);
    B.push(b1);
    B.push(b2);
    //console.log("A: " + A);
    //console.log("B: " + B);
    var Bob = 0;
    var Alice = 0;

    if(A.length != B.length){
        return "Arrays don't have the same length!"
    }

    for (var i = 0 ; i < A.length ; i++){
        if(A[i] > B[i]){
            Bob ++;
        } else if (A[i] < B[i]){
            Alice ++;
        }
    }
    console.log(Bob + " " + Alice);
    //return Bob + " " + Alice;
}

var retorno = solve(a0, a1, a2, b0, b1, b2);









