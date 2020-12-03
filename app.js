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

//GET Request for all movies
app.get('/getAllMovies', function(req, res) {
    db.all('SELECT * FROM all_movies', (error, result) => {
        res.send(result);
    });  
});

//GET Request for cluster 0
app.get('/getCluster0', function(req, res) {
    db.all('SELECT * FROM cluster0_edited', (error, result) => {
        res.send(result);
    });  
});

//GET Request for cluster 1
app.get('/getCluster1', function(req, res) {
    db.all('SELECT * FROM cluster1_edited', (error, result) => {
        res.send(result);
    });  
});

//GET Request for cluster 2
app.get('/getCluster2', function(req, res) {
    db.all('SELECT * FROM cluster2_edited', (error, result) => {
        res.send(result);
    });  
});

//GET Request for cluster 3
app.get('/getCluster3', function(req, res) {
    db.all('SELECT * FROM cluster3_edited', (error, result) => {
        res.send(result);
    });  
});

//GET Request for cluster 4
app.get('/getCluster4', function(req, res) {
    db.all('SELECT * FROM cluster4_edited', (error, result) => {
        res.send(result);
    });  
});

app.post('/postUserBehaviour', function(req, res){
    console.log(req.body.timestamp);
    db.run('INSERT INTO user_behaviour (userId, button, timestamp) VALUES ($userId, $button, $timestamp)', {
        $userId: req.body.userId,
        $button: req.body.button,
        $timestamp: req.body.timestamp,
    })
})

//Closing the Database
// db.close( (err) => {
//     if(err){
//         return console.error(err.message);
//     }
//     console.log('Closed the database connection');
// });

//Exporting the module
module.exports = app;