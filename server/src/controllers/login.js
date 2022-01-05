const controller = {}
const connection = require('../model/model');
const { getToken } = require('../services/jwt');

controller.login = (req, res) => {
    connection.query("SELECT * FROM users WHERE idUser = 3", (err, rows) => {
        if(err) {
            res.status(500).json({error:err});
        } else {
            res.status(200).json({
                token:getToken(rows[0])
            });
        }
    });
}

module.exports = controller;