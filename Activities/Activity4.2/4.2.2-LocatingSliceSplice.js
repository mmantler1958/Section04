const arr = ['a', 'a', 'b', 'a', 'c', 'b', 'a', 'b', 'b', 'c', 'c', 'c'];

// find the first index of "a", "b", and "c"
let fia = arr.indexOf("a")
let fib = arr.indexOf("b")
let fic = arr.indexOf("c")
console.log("first indexes...")
console.log("a index="+ fia + "  b index="+fib + " c index="+fic)
// find the last index of "a", "b", and "c"
let lia = arr.lastIndexOf("a")
let lib = arr.lastIndexOf("b")
let lic = arr.lastIndexOf("c")
console.log('last indexes...');
console.log("a index="+ lia + "  b index="+lib + " c index="+lic)
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

