//Input
var n = 2; //number of elements in A
var m = 3; //number of elements in B
var a = [2, 4]; //set of integers A
var b = [16, 32, 96] ; //set of integers B

//Solution

function total(n, m, a, b){

    candidCount = 0;
    for(var candid = a[n-1] ; candid <= b[0] ; candid++){
        var candidResult = candidTest(candid, m, n);
        if(candidResult){
            candidCount++;
        }
        //console.log("candid: " + candid + "    candidResult: " + candidResult + "    candidCount: " + candidCount);
    }
    return candidCount;

}

function candidTest(x, m, n){
    var aOK = true;
    var bOK = true;
    for (var i = 0 ; i < n ; i++){
        if(x % a[i] != 0){
            aOK = false;
            break;
        }
    }

    for (var j = 0 ; j < m ; j++){
        if(b[j] % x != 0){
            bOK = false;
            break;
        }
    }

    return (aOK && bOK);
}


var retorno = total(n, m, a, b);
