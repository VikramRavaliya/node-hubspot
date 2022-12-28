import express from 'express';

import userController from '../controllers/user.controller.js';

const router = express.Router();

router.get('/getAll', (userController.allPage));
router.get('/:id/page', (userController.getPage));
router.post('/create', (userController.create))


export default router;