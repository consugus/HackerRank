//Input
var firstLine = "4 5"; var secondLine = "10101 11100 11010 00101"; // 5 2


retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var nm = firstLine.split(" ").map( x => parseInt(x) );
    var n = nm[0], m = nm[1];
    var topic = secondLine.split(" ");
    console.log(acmTeam(topic));
    return "Hola";
};


function acmTeam(topic) {
    console.log("topic: " + topic);
    var maxTeams = 0, maxTeamsAll = 0;





    var ret = maxTeams.toString() + " " + maxTeamsAll.toString();
    return ret;
}
