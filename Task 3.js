function test65(a, b) {
    return ((a == 65 || b == 65) || (a + b == 65));
}

console.log(test65(65, 65))
console.log(test65(35, 65))
console.log(test65(40, 25))
console.log(test65(56, 40))
