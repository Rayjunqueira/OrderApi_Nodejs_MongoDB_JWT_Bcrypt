const { Router } = require('express');

const router = Router();

const CreateItem = require('../controllers/ItemController/CreateItem');
const FindItem = require('../controllers/ItemController/FindItem');
const UpdateItem = require('../controllers/ItemController/UpdateItem');
const ShowAllItem = require('../controllers/ItemController/ShowAllItem');
const DeleteItem = require('../controllers/ItemController/DeleteItem');

router.post('/', CreateItem.create);
router.get('/:id', FindItem.find);
router.put('/:id', UpdateItem.update);
router.get('/', ShowAllItem.show);
router.delete('/:id', DeleteItem.delete);

module.exports = router;