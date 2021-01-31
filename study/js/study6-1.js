function add(a,b){
    a=a||0;
    b=b||0;
    return a+b;
}

function sum() {
    var sum=0;
    for(i in arguments){
        sum+=arguments[i];
    }
    return sum;
}

// 匿名函数
var f=function(a,b){
    a=a||0;
    b=b||0;
    return a+b;
}

// 对象函数
var f1=new Function('a','b','return a+b');

// 自调函数
(function(a,b){
    a=a||0;
    b=b||0;
    console.log(a+b);
    return a+b;
})(1,2);