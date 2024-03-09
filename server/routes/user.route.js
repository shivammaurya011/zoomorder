const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { registrationValidation, validateRegistration } = require('../middlewares/validation.middleware');
const { authenticateUser } = require('../middlewares/authenticate.middleware');
const { authorizeUser } = require('../middlewares/authorize.middleware');

router.post('/register', [registrationValidation, validateRegistration], userController.register);
router.post('/login', userController.login);
router.get('/', authenticateUser, authorizeUser(['admin']), userController.getAllUsers);
router.get('/profile/:userId', authenticateUser, userController.getProfile);
router.put('/profile/:userId', authenticateUser, userController.updateProfile);
router.delete('/profile/:userId', authenticateUser, userController.deleteProfile);

module.exports = router;
