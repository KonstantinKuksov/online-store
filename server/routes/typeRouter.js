const Router = require('express');
const typeController = require('../controllers/typeController');
const chekRole = require('../middleware/checkRoleMiddleware');
const router = new Router();

router.post('/', chekRole('ADMIN'), typeController.create);

router.get('/', chekRole('ADMIN'), typeController.getAll);

module.exports = router;
