const axios = require("axios");
const cors = require("cors");
const path = require("path");

const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
const api = "https://api.shrtco.de/v2";

app.use(cors());

const dir = path.join(__dirname, "public");
app.use(express.static(dir));

// input url to be shortened
app.post("/shorten/:url", async (req, res) => {
  const url = req.params.url;
  try {
    const axiosRes = await axios.post(`${api}/shorten?url=${url}`);
    const shortened = axiosRes.data.result.short_link;
    res.send(shortened);
  } catch (error) {
    console.error(error);
  }
});

// get full url from code of shortened url
app.get("/:code", async (req, res) => {
  const code = req.params.code;
  try {
    const axiosRes = await axios.get(`${api}/info?code=${code}`);
    const url = axiosRes.data.result.url;
    res.send(url);
  } catch (error) {
    console.error(error);
  }
});

// just to verify that we are able to hit base endpoint
app.get("/", (req, res) => {
  console.log("It's working 👍");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
