import express from 'express';
import { authController } from './auth.controller';
import { requireAuth } from '../auth/middleware/auth.middleware';

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

export default router;
