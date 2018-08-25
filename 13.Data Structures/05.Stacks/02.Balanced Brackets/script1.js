//Input
var path = "Test Cases/Test Case 00 - Input.txt";
var textFile = new XMLHttpRequest();    // objet that requests data from the server
textFile.open("GET", path, false);   // specifies the type of request; parameters:  Method, path/file, Async
textFile.send();                          // execute the request
var content = textFile.responseText;


retorno = eval(content);

//Solution
function eval(content){
    content = content.split("\n");
    var len = parseInt(content.shift());

    for(var i = 0 ; i < len ; i++){
        str = content[i];
        strTrim = "";
        for(var j = 0 ; j < str.length ; j++){
            if(str.charCodeAt(j) != 13){
                strTrim += str[j];
            };
        };
        console.log(isBalanced(strTrim));
    };
};


function isBalanced(str){
    var keys = 0;// 1
    var brackets = 0;// 2
    var parenthesis = 0;// 3
    var pila = [];

    for (var i = 0 ; i < str.length ; i++){
        switch (str[i]) {
            case "{":
                pila.push(1);
                keys +=1;
                break;

            case "}":
                if(pila[pila.length-1] != 1){
                    return "NO";
                };
                pila.pop();
                keys -=1;
                break;

            case "[":
                pila.push(2);
                brackets +=1;
                break;

            case "]":
                if(pila[pila.length-1] != 2){
                    return "NO";
                };
                pila.pop();
                brackets -=1;
                break;

            case "(":
                pila.push(3);
                parenthesis +=1;
                break;

            case ")":
                if(pila[pila.length-1] != 3){
                    return "NO";
                };
                pila.pop();
                parenthesis -=1;
                break;

            default :
                break;
        }
    };

    var answer = "NO";
    if(keys == 0 && brackets == 0 && parenthesis == 0){
        answer = "YES";
    };

    return answer;
}