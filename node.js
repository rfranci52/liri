// this section is for omdb
// it is important to run npm install axios to get things set up
// js
require("dotenv").config();
// js
var keys = require("./keys.js");

var axios = require("axios");
var moment = require("moment");

// var spotify = require("node-spotify-api")
var inputString = process.argv;
var operand = inputString[2];

// var artist = inputString[3];



// bands in town example https://rest.bandsintown.com/artists/drake/events?app_id=codingbootcamp
// moment will be used for the bands in town api to get the right format
if (operand === "concerts") {
    var artist = inputString[3];

    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            console.log("venue name: " + response.data[0].venue.name + " " + "venue location: " + response.data[0].venue.city + ". date: " +
                moment(response.data[0].datetime).format('MMMM Do YYYY, h:mm:ss a'));
            // console.log(response)
        }
    );
}




if (operand === "movie") {
    var movieName = inputString[3];


    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    if (movieName === " ") {
        var queryUrl = "http://www.omdbapi.com/?t=mr.nobody&y=&plot=short&apikey=trilogy";

        axios.get(queryUrl).then(

            function (response) {
                console.log("plot: " + response.data.Plot + " " + "Release title: " + response.data.Title),
                    console.log(response.data.Ratings[1])
                console.log("imdb rating: " + response.data.imdbRating)
                console.log("country: " + response.data.Country)
                console.log("language: " + response.data.Language)
                console.log("actors: " + response.data.Actors)



            }
        );
    }

    // console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            console.log("plot: " + response.data.Plot + " " + "Release title: " + response.data.Title),
                console.log(response.data.Ratings[1])
            console.log("imdb rating: " + response.data.imdbRating)
            console.log("country: " + response.data.Country)
            console.log("language: " + response.data.Language)
            console.log("actors: " + response.data.Actors)



        }
    );
}
if (operand === "spotify") {
    var album = inputString[3];



    // var Spotify = require('node-spotify-api');

    // var spotify = new Spotify({
    //     id: "fbe2b4a734a34b3a938d6718b27ede93",
    //     secret: "55b8cfb34b484e3380d88422c52b7d4f"
    // });

    // spotify
    //     .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
    //     .then(function (data) {
    //         console.log(data);
    //     })
    //     .catch(function (err) {
    //         console.error('Error occurred: ' + err);
    //     });


    // it was important to add the line below to  ( var Spotify = require('node-spotify-api');)
    var Spotify = require('node-spotify-api');
    // keys

    var spotify = new Spotify(keys.spotify);


    spotify.search({
        type: 'track',
        query: album,
        limit: 1
    }, function (err, data) {
        var theSign = "https://api.spotify.com/v1/search?query=ace+of+base&type=track&offset=1&limit=5"
        if (err) {
            spotify
                .request(theSign)
                .then(function (data) {
                    console.log("artist: " + data.tracks.items[3].artists[0].name)
                    console.log("track name :" + data.tracks.items[3].name + ", track: ")
                    console.log(data.tracks.items[3].external_urls);
                    console.log(data.tracks.items[3].album.name);
                    // console.log(data)
                })
                .catch(function (err) {
                    console.error('Error occurred: ' + err);
                });



            // return console.log('Error occurred: ' + theSign);
        }
        // source - http://jsfiddle.net/JMPerez/0u0v7e1b/
        console.log("artist: " + data.tracks.items[0].artists[0].name)
        console.log("track name :" + data.tracks.items[0].name + ", track: ")
        console.log(data.tracks.items[0].external_urls);
        console.log(data.tracks.items[0].album.name);
        // console.log(data)
    });





    // var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    // console.log(queryUrl);

    // axios.get(queryUrl).then(
    //     function (response) {
    //         console.log("plot: " + response.data.Plot + " " + "Release Year: " + response.data.Year);
    //     }
    // );
}


// 