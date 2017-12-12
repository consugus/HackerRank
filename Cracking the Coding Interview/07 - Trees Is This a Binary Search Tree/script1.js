//Input
var n = 6;
var input = [12, 4, 5, 3, 8, 7]

//Solution
var a = [];

function updateArray(e){
    if(a == []){
        a.push(e);
        return;
    }
    for(var i = 0; i < a.length; i++){
        if(e <= a[i]){
            a.splice(i,0,e);
            return;
        }
    }
    a.push(e);
    return;
}
function getMedian(){
    if(a.length % 2 == 1){
        return a[(a.length-1)/2].toFixed(1);
    }
    else{
        var num_a = a[Math.floor((a.length-1)/2)];
        var num_b = a[Math.floor((a.length/2))];
        return ((num_a+num_b)/2).toFixed(1);
    }
}
(function() {
    //var n = parseInt(readLine());
    for(var a_i = 0; a_i < n; a_i++){
       // var temp = parseInt(readLine());
        var temp = input[a_i];
       updateArray(temp);
       console.log(getMedian());
    }
})();

retorno = "Hola";


