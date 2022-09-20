// var的使用
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    }
}

a[6]();  //10

// let的使用

let b = [];
for (let i = 0; i < 10; i++) {
    b[i] = function() {
        console.log(i);
    }
}

b[6]();  //6

// js的for循环,设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域

for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
// 能够输出3次abc，表明循环体内部的i与循环变量i不在同一个作用域