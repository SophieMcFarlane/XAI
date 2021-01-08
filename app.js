"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const {v4: uuidv4} = require('uuid');

var userid = uuidv4();

const sqlite3 = require('sqlite3');
const { response } = require('express');

var collaborativeFilteringTable = [
    [5, 1, 0, 0 ,0],
    [5, 0, 1, 0, 0],
    [5, 0, 0, 1, 0],
    [5, 0, 0, 0, 1],
    [1, 5, 0, 0, 0],
    [0, 5, 1, 0, 0],
    [0, 5, 0, 1, 0],
    [0, 5, 0, 0, 1],
    [1, 0, 5, 0, 0],
    [0, 1, 5, 0, 0],
    [0, 0, 5, 1, 0],
    [0, 0, 5, 0, 1],
    [1, 0, 0, 5, 0],
    [0, 1, 0, 5, 0],
    [0, 0, 1, 5, 0],
    [0, 0, 0, 5, 1],
    [1, 0, 0, 0, 5],
    [0, 1, 0, 0, 5],
    [0, 0, 1, 0, 5],
    [0, 0, 0, 1, 5],
];

var users = [{username: "Sophie"}, {username: "Soph"}];
var username = "";

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
// db.serialize(() => {
//     db.each(`SELECT id, title FROM all_movies`, (err, row) => {
//         if(err){
//             console.log(err.message);
//         }
//         console.log(row.id + "\t" + row.title);
//     });
// })

//GET Request for all movies
app.get('/getAllMovies', function(req, res) {
    db.all('SELECT * FROM all_movies ORDER BY rank', (error, result) => {
        res.send(result);
    });  
});

//GET Request for cluster 0
app.get('/getCluster0', function(req, res) {
    db.all('SELECT * FROM cluster0_edited ORDER BY rank DESC', (error, result) => {
        res.send(result);
    });  
});

//GET Request for cluster 1
app.get('/getCluster1', function(req, res) {
    db.all('SELECT * FROM cluster1_edited ORDER BY rank DESC', (error, result) => {
        res.send(result);
    });  
});

//GET Request for cluster 2
app.get('/getCluster2', function(req, res) {
    db.all('SELECT * FROM cluster2_edited ORDER BY rank DESC', (error, result) => {
        res.send(result);
    });  
});

//GET Request for cluster 3
app.get('/getCluster3', function(req, res) {
    db.all('SELECT * FROM cluster3_edited ORDER BY rank DESC', (error, result) => {
        res.send(result);
    });  
});

//GET Request for cluster 4
app.get('/getCluster4', function(req, res) {
    db.all('SELECT * FROM cluster4_edited ORDER BY rank DESC', (error, result) => {
        res.send(result);
    });  
});

//GET request to get recommendations
app.get('/getRecommendations', function(req, res){
    var timeg1 = 0;
    var timeg2 = 0;
    var timeg3 = 0;
    var timeg4 = 0;
    var timeg5 = 0;
    var group1Rating = 0;
    var group2Rating = 0;
    var group3Rating = 0;
    var group4Rating = 0;
    var group5Rating = 0;
    var userRatings = [];
    //Gets called for each row
    db.each('SELECT * FROM user_behaviour ORDER BY timestamp DESC', (error, result) => {
        //Regex expressions to match the buttons
        var reg1 = /g1/;
        var reg2 = /g2/;
        var reg3 = /g3/;
        var reg4 = /g4/;
        var reg5 = /g5/;
        //Find the latest button from g1 movies that has been clicked
        if (result.userId === username && result.timestamp > timeg1 && reg1.test(result.button)){
            timeg1 = result.timestamp;
            group1Rating = result.button.charAt(5);
        };
        //Find the latest button from g2 movies that has been clicked
        if (result.userId === username && result.timestamp > timeg2 && reg2.test(result.button)){
            timeg2 = result.timestamp;
            group2Rating = result.button.charAt(5);
        };
        //Find the latest button from g3 movies that has been clicked
        if (result.userId === username && result.timestamp > timeg3 && reg3.test(result.button)){
            timeg3 = result.timestamp;
            group3Rating = result.button.charAt(5);
        };
        //Find the latest button from g4 movies that has been clicked
        if (result.userId === username && result.timestamp > timeg4 && reg4.test(result.button)){
            timeg4 = result.timestamp;
            group4Rating = result.button.charAt(5);
        };
        //Find the latest button from g5 movies that has been clicked
        if (result.userId === username && result.timestamp > timeg5 && reg5.test(result.button)){
            timeg5 = result.timestamp;
            group5Rating = result.button.charAt(5);
        };
        //Creates a list of all the ratings for each group
        userRatings = [group1Rating, group2Rating, group3Rating, group4Rating, group5Rating];

    }, (error, numberofRows) => {
        //Only gets called onced after all the above rows have been checked
        var highestRated = 0;
        var highestRatedIndex = 0;
        //Find the highest rated group
        for (var i=0; i<5; i++){
            if(userRatings[i] > highestRated){
                highestRated = userRatings[i];
                highestRatedIndex = i;
            }
        }
        //Send the cluster that was rated highest
        if(highestRatedIndex == 0){
            db.all('SELECT * FROM cluster1_edited ORDER BY rank DESC', (error, result) => {
                res.send(result);
            });
        }else if(highestRatedIndex == 1){
            db.all('SELECT * FROM cluster2_edited ORDER BY rank DESC', (error, result) => {
                res.send(result);
            });
        }else if(highestRatedIndex == 2){
            db.all('SELECT * FROM cluster3_edited ORDER BY rank DESC', (error, result) => {
                res.send(result);
            });
        }else if(highestRatedIndex == 3){
            db.all('SELECT * FROM cluster4_edited ORDER BY rank DESC', (error, result) => {
                res.send(result);
            });
        }else if(highestRatedIndex == 4){
            db.all('SELECT * FROM cluster5_edited ORDER BY rank DESC', (error, result) => {
                res.send(result);
            });
        }
    })
})

//POST request to log user behaviour
app.post('/postUserBehaviour', function(req, res){
    console.log(req.body.timestamp);
    db.run('INSERT INTO user_behaviour (userId, button, timestamp) VALUES ($userId, $button, $timestamp)', {
        $userId: username,
        $button: req.body.button,
        $timestamp: req.body.timestamp,
    })
})

//POST request to login
app.post('/login', function(req, res){
    for(const key of Object.keys(users)){
        if (req.body.username === users[key]["username"]){
            username = req.body.username;
            res.send("Logged in as: " + req.body.username);
        }
    }
    res.send("Not a valid user, please sign up");
})

//POST request to sign up
app.post('/signup', function(req, res){
    var index = -1;
    for(const key of Object.keys(users)){
        if(req.body.username === users[key]["username"]){
            index = 1;
        }
    }

    if(index === -1){
        for(const key of Object.keys(users)){
            username = req.body.username;
            users.push = {username: req.body.username};
            res.send("Logged in as: " + req.body.username);
        }
    }else{
        res.send("User already exists, please login or sign up using a different username");
    }
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