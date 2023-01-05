import express from 'express';

import userController from '../controllers/user.controller.js';

const router = express.Router();

// router.get('/getAll', (userController.allPage));
router.get('/:id', (userController.getPage));
router.get('/add/page', (userController.addPage));
router.post('/add/page', (userController.create))


export default router;