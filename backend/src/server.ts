import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './modules/auth/auth.routes';
import frameRoutes from './modules/frame/frame.routes';
import notesRoutes from './modules/content/notes/notes.routes';
import duckRoutes from './modules/content/duck/duck.routes';
import journalRoutes from './modules/content/journal/journal.routes';
import polaroidRoutes from './modules/content/polaroid/polaroid.routes';
import keyRoutes from './modules/content/key/key.routes';
import mirrorRoutes from './modules/content/mirror/mirror.routes';
import clockRoutes from './modules/content/clock/clock.routes';

import { attachFrameId } from './modules/frame/middleware/frame.middleware';
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

app.use('/frame', requireAuth, attachFrameId);

// routes
app.use('/frame', frameRoutes);
app.use('/frame/notes', notesRoutes);
app.use('/frame/duck', duckRoutes);
app.use('/frame/journal', journalRoutes);
app.use('/frame/polaroid', polaroidRoutes);
app.use('/frame/key', keyRoutes);
app.use('/frame/mirror', mirrorRoutes);
app.use('/frame/clock', clockRoutes);

app.get('/', (_req, res) => {
  res.send('Cabinna backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));