const csv = require("csvtojson");


let getJson = async ()=> {
    let json = await csv().fromFile("./zomato_with_images.csv");
    console.log(json[0]);
} 

getJson();
console.log("This is freeky");
