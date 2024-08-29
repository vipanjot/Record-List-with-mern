// // Import the MongoClient class from the mongodb package
// const { MongoClient } = require('mongodb');

// // Connection URL
// const url = 'mongodb://127.0.0.1:27017';  // Replace with your MongoDB connection string if it's different

// // Database name
// const dbName = 'db';  // Replace with your database name

// // Create a new MongoClient
// const client = new MongoClient(url, { useUnifiedTopology: true });

// async function connectToMongoDB() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     console.log('Connected successfully to MongoDB server');

//     // Connect to the database
//     const db = client.db(dbName);

//     // You can perform database operations here
//     const collection = db.collection('conn'); // Replace with your collection name
//     const docs = await collection.find({}).toArray();
//     console.log('Documents:', docs);

//     // Close the connection
//     await client.close();
//   } catch (err) {
//     console.error('Failed to connect to MongoDB', err);
//   }
// }

// // Call the function to connect to MongoDB
// connectToMongoDB();










// const express = require("express");
// const app = express();
// const cors = require("cors");
// // require("dotenv").config({ path: "./config.env" });
// const port = process.env.PORT || 8000;
// app.use(cors());
// app.use(express.json());
// app.use(require("./routes/record"));
// // get driver connection
// const dbo = require("./db/conn");

// app.listen(port, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
//   });
//   console.log(`Server is running on port: ${port}`);
// });


//working
// const MongoClient = require("mongodb").MongoClient;

// const uri = "mongodb://0.0.0.0:27017/";

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function run() {
//   try {
//     await client.connect();
//     const globalAndUS = client.db("dbmv").collection("comedy");
//     const cursor = globalAndUS.find({}).limit(2);

//     await cursor.forEach(console.dir);
//   } finally {
//     await client.close();
//   }
// }

// run().catch(console.dir);







//////new

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});