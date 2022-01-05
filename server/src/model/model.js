const mysql = require('mysql');

const myConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
})
myConnection.connect(function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Database connected");
    }
})

module.exports = myConnection;