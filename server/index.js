const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();
const axios = require("axios");
///////////////////////////////////////////
const logger = require("morgan");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/api/search/", function (req, res) {

  const BASEURL = "https://sv443.net/jokeapi/category/Programming";
  const APIKEY = "2736829286383037";
  axios.get(BASEURL)
  .then(results => {
    const heroData = results && results.data && results.data.results;
    if (!heroData || !heroData.length) {
      return res.sendStatus(404);
    }else {
    res.json(heroData)
    }
  })
  console.log("woohoo we made we it");
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});