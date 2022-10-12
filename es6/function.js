function f(x = 1, y) {
    return [x,y]
}

const a = f(undefined,1);
console.log(a)