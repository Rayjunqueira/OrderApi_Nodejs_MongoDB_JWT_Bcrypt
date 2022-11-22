const { Router } = require('express');

const router = Router();

const CreateOrder = require('../controllers/OrderController/CreateOrder');
const UpdateOrder = require('../controllers/OrderController/UpdateOrder');
const ShowAllOrder = require('../controllers/OrderController/ShowAllOrder');
const FindOrder = require('../controllers/OrderController/FindOrder');
const DeleteOrder = require('../controllers/OrderController/DeleteOrder');

router.post('/', CreateOrder.create);
router.put('/:id', UpdateOrder.update);
router.get('/', ShowAllOrder.show);
router.get('/:id', FindOrder.find);
router.delete('/:id', DeleteOrder.delete);

module.exports = router;