const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menu.controllers');

router.get('/menus', menuController.getAllMenus);
router.get('/menus/:menuId', menuController.getMenuById);
router.post('/menus', menuController.createMenu);
router.put('/menus/:menuId', menuController.updateMenu);
router.delete('/menus/:menuId', menuController.deleteMenu);

module.exports = router;
