const controller = {} 
const connection = require('../model/model');

controller.getUsers = (req, res) => {
    connection.query("SELECT * FROM users", (err, rows) => {
        if(err) {
            res.status(500).json({error:err});
        } else {
            res.status(200).json({rows});
        }
    });
}

module.exports = controller;