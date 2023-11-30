const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'
 
// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
 
// Database Name
const dbName = "task-manager";
 
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");
 
  const insertResult = await collection.insertOne({ Name: "jack", age: 77 });
  console.log("Inserted documents =>", insertResult);

  await collection.insertMany([
    { Name: "gurizada fandangueira", age: 12 },
    {Name: "casada", age: 21 },
    { Name: "gurizada achuca", age: 87 },
    { Name: "gurizada sdh ", age: 63 }]
    )

    const docs = await collection.find().toArray();
    console.log(docs)
}
 
main();