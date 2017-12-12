//Input
var n = 10;

function stairCase(n){
    var str = "";

    for (var i = 0 ; i <= n ; i++){
        tempStr = "";
        //filling with spaces
        for (var j = 1 ; j < (n-i) ; j++){
            tempStr += " ";
        }
        //filling with "*"
        for (var j = 1 ; j <= i; j++){
            tempStr += "#";
        }
        // to avoid printing an "\n" for the last line
        if (i == n){
            str += tempStr
        } else if( i < n){
            str += tempStr + "\n";
        }
    }
    return str;
}

var retorno = stairCase(n);









