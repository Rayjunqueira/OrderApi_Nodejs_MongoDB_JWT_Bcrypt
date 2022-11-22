const { Router } = require('express');

const router = Router();

const AuthUser = require('../controllers/UserController/AuthUser');

router.post('/', AuthUser.store);

module.exports = router;