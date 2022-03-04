const mongoose = require('mongoose');
const validator = require('validator');

const dataBaseName = 'notes-api';
const connectionURL = 'mongodb://127.0.0.1:27017/' + dataBaseName;

mongoose.connect(connectionURL, {
    useNewUrlParser: true
})

const Task = mongoose.model('Task', {
    description:{
        type: String,
        required: true
    },
    completed:{
        type: Boolean
    },
    age:{
        type: Number,
        validate(value){
            if(value<0){
                throw "age must be positive"
            }
        },
        required: true
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw "invalid email"
            }
        }
    },
    password:{
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(value.length<6 || value.includes('password')){
                throw "invalid password"
            }
        }
    }
})

const me = new Task({
    description: 'clean the disher',
    completed: true,
    age: 21,
    email: "MATEUS96MT@GMAIL.COM",
    password: "masdhnoas"
})

me.save().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})