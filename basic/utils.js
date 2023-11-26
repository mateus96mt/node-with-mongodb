console.log("loading utils")

const name = "utils"
const description =  "utils description"

function add(a,b){
    return a+b;
}

module.exports = {
    name: name,
    description: description,
    add: add
}