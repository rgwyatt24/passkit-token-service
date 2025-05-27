
const express = require("express");
const fetch = require("node-fetch");
const app = express();
require("dotenv").config();

app.get("/token", async (req, res) => {
  const response = await fetch("https://identity.passkit.io/connect/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: "client_credentials",
      scope: "api"
    })
  });

  const data = await response.json();
  res.json(data);
});

module.exports = app;
