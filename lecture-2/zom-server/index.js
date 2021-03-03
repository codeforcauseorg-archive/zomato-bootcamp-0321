const express = require("express");

const app = express();
const csv = require("csvtojson");

// function middle(req, res, next){
//     console.log("This is a middleware");
//     res.send("Sent back from middle");
// }

// app.use(middle);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/photos', express.static('photos'));

app.get("/hotels", function (request, response) {

  csv()
    .fromFile("./zomato_with_images.csv")
    .then((json) => {
      response.send(json.slice(0, 10));
    });

});

app.listen(5000);
