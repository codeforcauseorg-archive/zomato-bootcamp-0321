var admin = require("firebase-admin");
const csv = require("csvtojson");

var serviceAccount = require("./zomato-91cd4-firebase-adminsdk-kbg0f-2733174e18.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let hotelsCollection = admin.firestore().collection("hotels");

csv()
  .fromFile("./zomato_with_images.csv")
  .then((json) => {
    json.slice(0, 50).map((hotel)=> {
      hotelsCollection.add(hotel);
    })
});

