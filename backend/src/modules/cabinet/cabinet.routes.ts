import express from 'express';
import { cabinetController } from './cabinet.controller';
import { requireAuth } from '../auth/middleware/auth.middleware';

const router = express.Router();

router.get('/', requireAuth, cabinetController.getCabinet);
router.put('/', requireAuth, cabinetController.updateCabinet);

export default router;
