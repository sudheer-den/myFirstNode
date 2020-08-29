const mysql = require("mysql");
const dbConfig = require("../config/db.config");

//create connection to db
const connection = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b1410d5b9f62d4',
    password: '3de289a3',
    database: 'heroku_12e8d63e3685c45'
    // host: dbConfig.HOST,
    // user: dbConfig.USER,
    // password: dbConfig.PASSWORD,
    // database: dbConfig.DB
});

connection.connect(error => {
    if (error)
        throw error;
    console.log("connection successful to the database");
})

module.exports = connection;