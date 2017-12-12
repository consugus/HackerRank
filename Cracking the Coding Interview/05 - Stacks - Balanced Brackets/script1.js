//Input
var n = 3;
var expression = "{[()]}";               // expected ouput --> 1
//var expression = "{[(])]}";           // expected ouput --> 0
//var expression = "{{[[(())]]}}";      // expected ouput --> 1
//var expression = "{[()()]}";          // expected ouput --> 1, OK
//var expression = "(";                 // expected ouput --> 0, OK
//var expression = "([)()]";            // expected ouput --> 0, OK
//var expression = "[(])";              // expected ouput --> 0, OK
//var expression = "({{({}[]{})}}[]{})";// expected ouput --> 1, OK




//Solution
function eval(expression){
    var keys = 0;// 1
    var brackets = 0;// 2
    var parenthesis = 0;// 3
    var stack = [];

    for (var i = 0 ; i < expression.length ; i++){
        switch (expression[i]) {
            case "{":
                stack.push(1);
                keys +=1;
                break;

            case "}":
                if(stack[stack.length-1] != 1){
                    return "NO";
                };
                stack.pop();
                keys -=1;
                break;

            case "[":
                stack.push(2);
                brackets +=1;
                break;

            case "]":
                if(stack[stack.length-1] != 2){
                    return "NO";
                };
                stack.pop();
                brackets -=1;
                break;

            case "(":
                stack.push(3);
                parenthesis +=1;
                break;

            case ")":
                if(stack[stack.length-1] != 3){
                    return "NO";
                };
                stack.pop();
                parenthesis -=1;
                break;

            default :
                break;
        }
    };

    if(keys == 0 && brackets == 0 && parenthesis == 0){
        return "YES";
    };

    return "NO";
}

var retorno = eval(expression);
