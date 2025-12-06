import express from 'express';
import { frameController } from './frame.controller';
import { requireAuth } from '../auth/middleware/auth.middleware';

const router = express.Router();

router.get('/', requireAuth, frameController.getFrame);
router.put('/', requireAuth, frameController.updateFrame);

export default router;
