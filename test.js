(function() {
    var l = lbl(10, 'low');
    var m = lbl(15, 'mid');
    var h = lbl(20, 'high', 'mid');

    if (m === 15) {
        /* This assignment is not allowed due to execution context containing the
           label 'mid', which h does not have.*/
        h = 25;
    }
})();