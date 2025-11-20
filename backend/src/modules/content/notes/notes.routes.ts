import express from 'express';
import { notesController } from './notes.controller';

const router = express.Router({ mergeParams: true });

router.get('/', notesController.getNotes);
router.post('/', notesController.createNote);
router.put('/:noteId', notesController.updateNote);
router.delete('/:noteId', notesController.deleteNote);

export default router;
