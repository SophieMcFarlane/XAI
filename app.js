"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

//Loading in the Database
let db = new sqlite3.Database('./db.sqlite', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database');
});

//Querying the Database
db.serialize(() => {
    db.each(`SELECT id, title FROM all_movies`, (err, row) => {
        if(err){
            console.log(err.message);
        }
        console.log(row.id + "\t" + row.title);
    });

})

//Trying to display a query
app.get('/getData', function(req, res) {
    db.all('SELECT id, title FROM all_movies WHERE cluster = 0', (error, result) => {
        res.send(result);
    });
    
    
});

//Closing the Database
// db.close( (err) => {
//     if(err){
//         return console.error(err.message);
//     }
//     console.log('Closed the database connection');
// });

//Exporting the module
module.exports = app;