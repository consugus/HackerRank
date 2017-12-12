//Input
//var n = 10;
//var input = [[10],[1, 42], [2], [1, 14], [3], [1, 28], [3], [1, 60], [1, 78], [2], [2]];
var input = "10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2";

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var expression = readLine();
        var result = processData(expression);
    process.stdout.write("" + result + "\n");
    }
}

//Solution

function processData(input) {
    // creates an array of strings with each line of the input
    // [10,1 42,2,1 14,3,1 28,3,1 60,1 78,2,2]
    var inputArray = input.split("\n");
    var myQueue = [];
    for (var i = 1; i < inputArray.length; i++) {
       if (inputArray[i][0] === "1") {
            // removes first position (1, 2 or 3) and then trims
            // to get the value. Finally pushes to myQueue array
            var value = inputArray[i].slice(1).trim();
            myQueue.push(value);
        }
        if (inputArray[i][0] === "2") {
            myQueue.shift();
        }
        if (inputArray[i][0] === "3") {
            console.log(myQueue[0]);
        }
    }
}



var retorno = processData(input);
