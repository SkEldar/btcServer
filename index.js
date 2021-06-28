const express = require("express");

const app = express();
const request = require("request");
app.get("/quotes", (req, result) => {
  result.setHeader("Access-Control-Allow-Origin", "*");
  result.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  let btc = "1";
  request(
    { url: "https://api.coindesk.com/v1/bpi/currentprice.json", json: true },
    function (err, res, json) {
      if (err) {
        throw err;
      }
      btc = JSON.stringify(json.bpi.USD.rate);
      result.send(btc);
    }
  );
  
});

app.listen(19002);
