const Router = require('express');
const brandController = require('../controllers/brandController');
const chekRole = require('../middleware/checkRoleMiddleware');
const router = new Router();

router.post('/', chekRole('ADMIN'), brandController.create);

router.get('/', chekRole('ADMIN'), brandController.getAll);

module.exports = router;
