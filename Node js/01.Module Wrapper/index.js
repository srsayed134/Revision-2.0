//Module wrapper
//When we execute anything in js this IIFE (imidietly inbok function expression) funciton is work behind of every output
(function (exports, require, module, __filename, __dirname){
    console.log("Hello this IIFE")
})

console.log(__filename); //It will give full name with itself
console.log(__dirname); //But this will give only parent name where it is hold
