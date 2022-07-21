//install library in project

// import library
// const { ServerApiVersion } = require('mongodb');
const { MongoClient, ServerApiVersion } = require('mongodb');

const {uri} = require('./dbsecrets.js');
// connect to mongo/atlas USING a URL connection string

const client = new MongoClient(uri,{useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1})


// connect to a sample_mflix database
const db = client.db('sample_mflix');
// query

// lets get a specific movie (doc) from the "movies" collection 
// search by title for "Back To The Future"

db.collection('movies')
 .findOne({ title: "Back to the Future" }, (err, results) => {
    if(err) {
        console.log(err);
    }
    // lets output the results:
    console.log(results);
    client.close();
 });

// output result

