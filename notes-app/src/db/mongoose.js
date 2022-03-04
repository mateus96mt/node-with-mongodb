const mongoose = require('mongoose');

const dataBaseName = 'notes-api';
const connectionURL = 'mongodb://127.0.0.1:27017/' + dataBaseName;

mongoose.connect(connectionURL, {
    useNewUrlParser: true
})

const User = mongoose.model('User', {
    name:{
        type: String
    },
    age:{
        type: Number
    }
})

const me = new User({
    name: 'MATEUS',
    age: 78
})

me.save().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})