const fs = require("fs")
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('File Name: ', (file) =>{
    fs.readFile(file,(error,buffer) => {
        if (error){
            console.log(error.message)
            readline.close()
            return
        }  
         
    readline.question('Output File: ', (file2) =>{
        readline.close()
        const content = buffer.toString()
        const upper = content.toUpperCase()
        fs.writeFile(file2,upper,(error) => {
            if (error){
                console.log(error.message)
                return
            }  

            console.log(`Wrote to file ${file2}`)
        })
    })
})})
