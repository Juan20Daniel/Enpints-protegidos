const jwt = require('jwt-simple');
const secret_key = "fEAgj5wa3bnMNz12lMhzpO5";
const moment = require('moment');

function getToken(data) {
    const payload = {
        idUser:data.idUser,
        firstname:data.firstname,
        lastname:data.lastname,
        email:data.email,
        expire:moment().add(3, 'days').unix()
    }
    return jwt.encode(payload, secret_key);
}

module.exports = {
    getToken,
    secret_key
}