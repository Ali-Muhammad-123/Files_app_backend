const express = require('express');
var mysql = require('mysql');
const app = express();
const port = 5000;
var newemail, newpass ,lis={};
const axios = require('axios');

const {MongoClient} = require('mongodb');
var email, pass;

app.use(express.json());  

const uri = "mongodb+srv://ali:ali123@cluster0-hd5es.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect();


async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 
async function findOneListingByName(client, nameOfListing) {
    result = await client.db("filenames").collection("collection_1").findOne({ filename: nameOfListing }
);
 
    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}

async function findalllistings(client) {
    
    result = await client.db("filenames").collection("collection_1").find();
 
    if (result) {
        console.log(`Total docs ; `);
        //result.toArray(function(err, res) {
            
          //  console.log(res);
            
         // });

        return result.toArray()
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
    
}






app.get('/getnotes', async (req, res) => {
    
    
    
    res.send(await findalllistings(client));
      
});








app.get('/getauth' , (req,res)=>{


});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));