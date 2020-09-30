const fs = require('fs')


let file = fs.readFileSync(process.argv[2])
let filestr = file.toString()
let spl = filestr.split('\n')
console.log(spl.length-1)
