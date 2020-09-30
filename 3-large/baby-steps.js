
let total = 0
const array = process.argv
for (let i = 2; i < array.length; i++) {
    const element = array[i];
    total += parseInt(element)
    
}
console.log(total)




