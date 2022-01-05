const express = require('express');
const route = express.Router();
const controllerLogin = require('../controllers/login');
const controllerGetUsers = require('../controllers/users');
const md_auth = require('../middleware/authenticated');
route.get('/get-token', controllerLogin.login);
route.get('/get-users', [md_auth.ensureAuth], controllerGetUsers.getUsers);

module.exports = route;