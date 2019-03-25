var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

console.log(queryUrl);

axios.get(queryUrl).then(
    function (response) {
        console.log("plot: " + response.data.Plot + " " + "Release Year: " + response.data.Year);
    }
);