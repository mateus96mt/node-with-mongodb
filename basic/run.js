const fs = require('fs')
const utils = require('./utils')
console.log("hello world")
//fs.writeFileSync("teste.txt", "teste")

let file = fs.appendFileSync("teste.txt", "adding new text")
console.log(utils)
console.log(utils.add(1,2))

const notes = require("./notes")
console.log(notes.getNotes())

const validator = require('validator')
console.log(validator.isEmail("teste@f.com"))

const chalk = require('chalk')

console.log(chalk.blue('hello'))
console.log(chalk.red('hello'))
console.log(chalk.yellow('hello'))
console.log(chalk.green('hello'))
console.log(chalk.cyan('hello'))
console.log(chalk.white('hello'))
console.log(chalk.white('black'))


