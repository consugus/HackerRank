//Input
var firstLine = "10", secondLine = ["1 97", "2", "1 20", "2", "1 26", "1 20", "2", "3", "1 91", "3"];
// 26 91

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var input = [];
    for(var i = 0 ; i < n ; i++){
        input.push(secondLine[i].split(" ").map( x => parseInt(x) ) );
    };
    console.log(processData(input));
};


function processData(input) {
    //Enter your code here
    var len = input.length, stack = [], output = [];
    console.log("input: " + input[0] + "\tlen: " + len);
    for(var i = 0 ; i < len ; i++){
        switch(input[i][0]){
            case 1: // unshift element
                //console.log("caso 1");
                stack.unshift(input[i][1]);
                break;
            case 2: // shift element at the top
                // console.log("caso 2");
                stack.shift();
                break;
            case 3: // Print maximun element in the stack
                // console.log("caso 3");
                output.push(stack[0]);
                break;
        };
    };

    return output;
};
