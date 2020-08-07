function test3(c, d) {
    return ((c ==3 || d == 3) || (c + d == 3));
}

console.log(test3(3, 3))
console.log(test3(2, 3))
console.log(test3(4, 4))
console.log(test3(1, 2))
