const Router = require('express');
const deviceController = require('../controllers/deviceController');
const router = new Router();

router.post('/', chekRole('ADMIN'), deviceController.create);
router.get('/', chekRole('ADMIN'), deviceController.getAll);
router.get('/:id', deviceController.getOne);

module.exports = router;
