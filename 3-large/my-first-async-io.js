const fs = require('fs')




function callback(err, data) {
    if (err) {
        return (err.message)
    }
    
    let filestr = data.toString()
    let spl = filestr.split('\n')
    console.log(spl.length - 1)
}