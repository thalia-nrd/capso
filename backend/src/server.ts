import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './modules/auth/auth.routes';
import frameRoutes from './modules/frame/frame.routes';
import notesRoutes from './modules/content/notes/notes.routes';
import checklistRoutes from './modules/content/checklist/checklist.routes';
import journalRoutes from './modules/content/journal/journal.routes';
import polaroidRoutes from './modules/content/polaroid/polaroid.routes';
import chestRoutes from './modules/content/chest/chest.routes';
import mirrorRoutes from './modules/content/mirror/mirror.routes';
import mp3Routes from './modules/content/mp3/mp3.routes';
import spotifyRoutes from './modules/auth/spotify/spotify.routes';

import { verifyFrameOwnership } from './modules/frame/middleware/frame.middleware';
import { requireAuth } from './modules/auth/middleware/auth.middleware';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3001',
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

// public
app.use('/auth', authRoutes);

app.use('/frame', requireAuth);

app.use('/frame/:frameId', verifyFrameOwnership);

// routes
app.use('/frame', frameRoutes);
app.use('/frame/:frameId/notes', notesRoutes);
app.use('/frame/:frameId/checklists', checklistRoutes);
app.use('/frame/:frameId/journal', journalRoutes);
app.use('/frame/:frameId/polaroid', polaroidRoutes);
app.use('/frame/:frameId/chest', chestRoutes);
app.use('/frame/:frameId/mirror', mirrorRoutes);
app.use('/frame/:frameId/mp3', mp3Routes);
app.use('/spotify', spotifyRoutes);

app.get('/', (_req, res) => {
  res.send('Cabinna backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));