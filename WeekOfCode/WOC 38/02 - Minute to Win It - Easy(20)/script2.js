function minuteToWinIt(a, k) {
    // Return the minimum amount of time in minutes.
    var a1 = [], a2 = [];
    var count = 0, count1 = 0, count2 = 0, len = a.length;
    for(var i = 0 ; i < len ; i++){
        a1[i] = a[i];
        a2[i] = a[i];
    };

    // console.log("k: " + k + "\ta: " + a + "\ta1: " + a1 + "\ta2: " + a2 + "\tlen: " + len + "\n\n");
    for(var i = len/2 ; i > 0 ; i--){
        // console.log("a[" + i + "]: " + a[i] + "\ta[ " + (i-1) + "]: " + a[i-1] + "\tdiff: " +  (a[i-1] - a[i])  );
        if( (a1[i] - a1[i-1]) != k ){
            a1[i-1] = a1[i] - k;
            count1++;
        };
    };
    // console.log("k: " + k + "\ta1: " + a1 + "\tlen: " + len + "\n\n");

    for(var i = len/2 + 1 ; i < len ; i++){
        // console.log("a[" + (i-1) + "]: " + a[i-1] + "\ta[ " + (i) + "]: " + a[i] + "\tdiff: " +  (a[i] - a[i-1])  );
        if( (a1[i] - a1[i-1]) != k ){
            a1[i] = a1[i-1] + k;
            count1++;
        };
    };
    // console.log("k: " + k + "\ta1: " + a1 + "\tlen: " + len + "\n\n");



    // console.log("k: " + k + "\ta2: " + a2 + "\tlen: " + len + "\n\n");
    for(var i = len/2 - 1; i > 0 ; i--){
        // console.log("a2[" + i + "]: " + a2[i] + "\ta2[" + (i-1) + "]: " + a2[i-1] + "\tdiff: " +  (a[i-1] - a[i])  );
        if( (a2[i] - a2[i-1]) != k ){
            a2[i-1] = a2[i] - k;
            count2++;
        };
    };
    // console.log("k: " + k + "\ta2: " + a2 + "\tlen: " + len + "\n\n");

    for(var i = len/2 ; i < len ; i++){
        // console.log("a2[" + (i-1) + "]: " + a2[i-1] + "\ta2[ " + (i) + "]: " + a2[i] + "\tdiff: " +  (a[i] - a[i-1])  );
        if( (a2[i] - a2[i-1]) != k ){
            a2[i] = a2[i-1] + k;
            count2++
        };
    };
    // console.log("k: " + k + "\ta2: " + a2 + "\tlen: " + len + "\n\n");

    return Math.min(count1, count2);
}