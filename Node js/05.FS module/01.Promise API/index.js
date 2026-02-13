import * as fs from "fs/promises"

//Creating dir or folder step by step
// try {
//     await fs.mkdir("c:\\file1")
// } catch (error) {
//     console.log(error)
// }

// try {
//     await fs.mkdir("c:\\file1\\file2")
// } catch (error) {
//     console.log(error)
// }

//Creat directly by recursive: true 
// try {
//     await fs.mkdir("c:\\file1\\file2", {recursive: true}) 
//     console.log("Folder created")
// } catch (error) {
//     console.log(error)
// }
//Read file

// try {
//     let files = await fs.readdir("c:\\file1\\file2")
//     for (const file of files) {
//         console.log(file)
//     }
// } catch (error) {
//     console.log(error)
// }

//Remove dir step by step

// try {
//     await fs.rmdir("c:\\file1\\file2") //In file2 have to empthy
//     console.log("File 2 removed")
// } catch (error) {
//     console.log(error)
// }


//Create a new file and write

// try {
//     await fs.writeFile("README.md", "Hello nodejs")
// } catch (error) {
//     console.log(error)
// } //This create README.md file

//Read file 

try {
    const data = await fs.readFile("README.md", "utf-8") //Without utf 8 output will show buffer
    console.log(data)
} catch (error) {
    console.log(error)
}

//Add text to readme file

try {
    await fs.appendFile("README.md", "This is example")
} catch (error) {
    console.log(error)
}
//Copy file

