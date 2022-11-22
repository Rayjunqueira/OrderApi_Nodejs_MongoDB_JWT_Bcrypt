const { Router } = require('express');

const router = Router();

const { verifyToken } = require('../middlewares/VerifyToken');

const CreateUser = require('../controllers/UserController/CreateUser');
const ShowAllUser = require('../controllers/UserController/ShowAllUser');
const UpdateUser = require('../controllers/UserController/UpdateUser');
const FindUser = require('../controllers/UserController/FindUser');
const DeleteUser = require('../controllers/UserController/DeleteUser');

router.post('/', CreateUser.create);
router.get('/', verifyToken, ShowAllUser.show);
router.get('/:id', verifyToken, FindUser.find);
router.put('/:id', verifyToken, UpdateUser.update);
router.delete('/:id', verifyToken, DeleteUser.delete);


module.exports = router;