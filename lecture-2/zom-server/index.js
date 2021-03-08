const express = require("express");
const cors = require("cors");

const app = express();
const csv = require("csvtojson");

var admin = require("firebase-admin");

var serviceAccount = require("./zomato-91cd4-firebase-adminsdk-kbg0f-2733174e18.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const bearerToken = require("express-bearer-token");

// function middle(req, res, next){
//     console.log("This is a middleware");
//     res.send("Sent back from middle");
// }

// app.use(middle);
app.use(cors());

app.use(bearerToken());

app.use("/hotels", (req, res, next) => {
  if (req.token) {
    admin
      .auth()
      .verifyIdToken(req.token)
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((error) => {
        res.send(401);
      });
  } else {
    res.send(401);
  }
});

app.get("/check", (req, res) => {
  res.send("Responding");
});

app.use("/photos", express.static("photos"));

app.get("/hotels", function (request, response) {
  csv()
    .fromFile("./zomato_with_images.csv")
    .then((json) => {
      response.send(json.slice(0, 40));
    });
});

app.listen(5000);
