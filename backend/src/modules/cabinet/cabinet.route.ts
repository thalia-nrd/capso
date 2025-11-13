import express from 'express';
import { cabinetController } from './cabinet.controller';

const router = express.Router();

router.get('/', cabinetController.getCabinet);
router.post('/', cabinetController.createCabinet);
router.put('/', cabinetController.updateCabinet);
router.delete('/', cabinetController.deleteCabinet);

export default router;