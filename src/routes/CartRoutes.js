const { Router } = require('express');

const router = Router();

const CreateCart = require('../controllers/CartController/CreateCart');
const ShowAllCart = require('../controllers/CartController/ShowAllCart');
const FindCart = require('../controllers/CartController/FindCart');
const UpdateCart = require('../controllers/CartController/UpdateCart');
const DeleteCart = require('../controllers/CartController/DeleteCart');

router.post('/', CreateCart.create);
router.get('/', ShowAllCart.show);
router.put('/:id', UpdateCart.update);
router.get('/:id', FindCart.find);
router.delete('/:id', DeleteCart.delete);

module.exports = router;