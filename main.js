/// CRUD
// CREATE
// READ
// DELETE

const { ObjectID } = require('bson');
const { MongoClient } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const dataBaseName = 'task-mananger';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('error:', error)
    }

    const db = client.db(dataBaseName)

    //https://docs.mongodb.com/manual/reference/operator/update/
    db.collection('users').updateOne({ _id: new ObjectID("620fec32508e1be1074c3596") },
        {
            $inc:{
                age: 4
            }
        }).then((result)=>{
            console.log(result);
        }).catch((error)=>{
            console.log(error);
        })

    db.collection('users').updateMany({ age:26},
        {
            $inc:{
                age: 40
            }
        }).then((result)=>{
            console.log(result);
        }).catch((error)=>{
            console.log(error);
        })

    db.collection('users').deleteMany({age: 66}).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
})