const mysql = require("mysql");
const dbConfig = require("../config/db.config");

//create connection to db
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

connection.connect(error => {
    if (error)
        throw error;
    console.log("connection successful to the database");
})

module.exports = connection;