// import dns from 'dns';
// import readline from 'readline'
const dns = require('dns')
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Domain Name: ', (domain) =>{
    readline.close()
    dns.lookup(domain,(error,address) => {
        if (error){
            console.log(error.message)
            return
        }  
        console.log(`IP Address: ${address}`)
    })
})

