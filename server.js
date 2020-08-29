const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// To parse request types of  content-type: application/json 
app.use(bodyParser.json());

//To parse request types of content-type: application/x-wwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended : true}));

app.get("/", (req, res) => {
    res.json({ message: "my first route"});
});

require("./app/routes/customer.routes")(app);

app.listen( 3000, () => {
    console.log("Listening on port 3000");
});




