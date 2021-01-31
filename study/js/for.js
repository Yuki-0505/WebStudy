(function () {
    var arr = [1, 2, 3, 4, 5];

    for (var i = 0; i < arr.length; i++) {
        console.log(i, ":", arr[i]);
    }

    for (var i = 0, len = arr.length; i < len; i++) {
        console.log(i, ":", arr[i]);
    }

    for (i = 0; arr[i] != null; i++) {
        console.log(i, ":", arr[i]);
    }

    arr.forEach(function (value, index) {
        console.log(index, ":", value);
    });

    Array.prototype.forEach.call(arr,function(value, index){
        console.log(index, ":", value);
    });

    for(var index in arr) {
        console.log(i, ":", arr[i]);
    }

    arr.map(function(value, index) {
        console.log(index, ":", value);
    });

    for(let value of arr) {
        console.log(value);
    };

})();