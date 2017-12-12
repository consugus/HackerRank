//Input
var x1 = 0; var v1 = 3; var x2 = 5; var v2 = 3; // Yes
//var x1 = 0; var v1 = 2; var x2 = 5; var v2 = 3; // NO
//var x1 = 2081; var v1 = 8403; var x2 = 9107; var v2 = 8400; // YES (26)
//var x1 = 1571; var v1 = 4240; var x2 = 9023; var v2 = 4234; // YES (29)


//Solution

function kangaroo(x1, v1, x2, v2){

    var answer = "NO"; var  counter = 0 ; var x10 = x1; var x20 = x2;
    do{

        var x1Next = x10 + v1;

        var x2Next = x20 + v2;

        if ((Math.abs(x20-x10)) < (Math.abs(x2Next-x1Next))){
            break;
        }

        if(x1Next == x2Next){
            answer = "YES";
        }
        counter++;

        x10 = x1Next;
        x20 = x2Next;

    }while (counter < 100000)


    return answer;



}


var retorno = kangaroo(x1, v1, x2, v2);
