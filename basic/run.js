/*const fs = require('fs')
const utils = require('./utils')
//console.log("hello world")
//fs.writeFileSync("teste.txt", "teste")

let file = fs.appendFileSync("teste.txt", "adding new text")
//console.log(utils)
//console.log(utils.add(1,2))

const notes = require("./notes")
//console.log(notes.getNotes())

const validator = require('validator')
//console.log(validator.isEmail("teste@f.com"))

const chalk = require('chalk')
const yargs = require('yargs')

console.log(chalk.blue('hello'))
console.log(chalk.red('hello'))
console.log(chalk.yellow('hello'))
console.log(chalk.green('hello'))
console.log(chalk.cyan('hello'))
console.log(chalk.white('hello'))
console.log(chalk.white('black'))

//console.log(process.argv)//get terminal arguments

console.log(yargs.argv)
yargs.version('1.0')

yargs.command({
    command: 'add',
    describe: 'add two numbers',
    handler: function(){
        console.log('adding two numbers')
    }
})
*/

const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')


// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

//node .\run.js add --title="teste" --body="teste"
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

console.log(yargs.argv)

const obj ={
    myname(){
        return "my name";
    }
}

console.log(obj.myname())
