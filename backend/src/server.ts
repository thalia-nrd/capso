import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './modules/auth/auth.routes';
import cabinetRoutes from './modules/cabinet/cabinet.routes';
import notesRoutes from './modules/content/notes/notes.routes';
import checklistRoutes from './modules/content/checklist/checklist.routes';
import journalRoutes from './modules/content/journal/journal.routes';
import frameRoutes from './modules/content/frame/frame.routes';
import chestRoutes from './modules/content/chest/chest.routes';

import { verifyCabinetOwnership } from './modules/cabinet/middleware/cabinet.middleware';
import { requireAuth } from './modules/auth/middleware/auth.middleware';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

// public
app.use('/auth', authRoutes);

app.use('/cabinet', requireAuth);

app.use('/cabinet/:cabinetId', verifyCabinetOwnership);

// routes
app.use('/cabinet', cabinetRoutes);
app.use('/cabinet/:cabinetId/notes', notesRoutes);
app.use('/cabinet/:cabinetId/checklists', checklistRoutes);
app.use('/cabinet/:cabinetId/journal', journalRoutes);
app.use('/cabinet/:cabinetId/frame', frameRoutes);
app.use('/cabinet/:cabinetId/chest', chestRoutes);

app.get('/', (_req, res) => {
  res.send('Cabinna backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));