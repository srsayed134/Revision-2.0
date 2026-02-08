import path from "path";
// console.log(path.basename("c:\\nodejs\\app.html")) //app.html
// console.log(path.basename("c\\nodejs\\app.js", ".js")) //app
// console.log(path.dirname("c:\\nodejs\\courses\\index.html")) //c:\\nodejs\\courses
// console.log(path.extname("c:\\nodejs\\courses\\index.html")) //.html
// console.log(path.join("c:", "huxn-web", "courses", "redux-webkit")) //huxn-web\courses\redux-webkit

// console.log(path.join("c:", "huxn-web", "course", "redux-toolkit", "..")) //c:\huxn-web\course
// console.log(path.join("c:", "huxn-web", "course", "redux-toolkit", "..", "..")) //c:\huxn-web
// console.log(path.join("c:\\huxn\\\courses\\react\\\\redux")) //c:\huxn\courses\react\redux
console.log(path.parse("c:\\nodejs\\courses\\index.html"))
console.log(path.parse("c:\\nodejs\\courses\\index.html").name)
console.log(path.parse("c:\\nodejs\\courses\\index.html").ext)
console.log(path.parse("c:\\nodejs\\courses\\index.html").dir)
console.log(path.parse("c:\\nodejs\\courses\\index.html").root)