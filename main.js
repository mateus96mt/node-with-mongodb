/// CRUD
// CREATE
// READ
// DELETE

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const dataBaseName = 'task-mananger';

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=>{
    if(error){
        return console.log('error:', error)
    }

    const db = client.db(dataBaseName)

    db.collection('users').insertOne({
        'name': 'mateus',
        'age': 26
    })
})