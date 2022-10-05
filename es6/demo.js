//题目描述：数组扁平化，给定一个多层嵌套的数组，转换为一维数组
//示例：
//1、输入：[1,2,3] 返回：[1,2,3]
//2、输入：[1,[2,3]] 返回：[1,2,3]
//3、输入：[1,[2,3,[4,5]]] 返回：[1,2,3,4,5]
//4、输入：'abc' 返回：invalid

function flatArray(arr){
    if(!Array.isArray(arr)) {
        console.log('invalid');
        return;
    }
    const res = helper(arr);
    console.log(res);
}

function helper(arr) {
    const res = [];
    arr.forEach((item) => {
        if (!Array.isArray(item)) {
            res.push(item)
        } else {
            res.push(...helper(item))
        }
    })
    return res;
}

flatArray([1,2,3]);
flatArray([1,[2,3]]);
flatArray([1,[2,3,[4,5]]]);
flatArray('abc');