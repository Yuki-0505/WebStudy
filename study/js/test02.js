// 变量函数优先级高于构造函数
var foo = function (x, y) {
    return x - y;
}
function foo(x, y) {
    return x + y;
}
console.log(foo(1, 2));
// -1