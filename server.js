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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// app.listen( 3000, () => {
//     console.log("Listening on port 3000");
// });




