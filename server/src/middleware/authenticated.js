const jwt = require('jwt-simple');
const moment = require('moment');
const { secret_key } = require('../services/jwt');

exports.ensureAuth = (req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(403).json({error:"No se encontro ningun cabecero"});
    }

    const token = req.headers.authorization.replace(/['"]+/g, "");

    try {
        var payload = jwt.decode(token, secret_key);

        if(payload.expire <= moment().unix()) {
            res.status(404).json({message:"El token a caducado!!"});
        } else {
            req.user = payload;
            next();
        }
    } catch(ex) {
        res.status(404).json({message:"Token invalido"})
    }
}