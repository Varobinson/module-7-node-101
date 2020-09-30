const fs = require("fs")
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('File Name: ', (file) =>{
    readline.close()
    fs.readFile(file,(error,buffer) => {
        if (error){
            console.log(error.message)
            return
        }  
        const content = buffer.toString()
        const upper = content.toUpperCase()
        console.log(upper)
    })
})
