const express = require('express');
const router = express.Router();
const Users = require('./controllers/Users')
const UsersController = new Users();

router.get('/', UsersController.index);
router.get('/heart', UsersController.fetch_heart);

module.exports = router;