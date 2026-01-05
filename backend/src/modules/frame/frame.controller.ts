import { Request, Response } from 'express';
import { frameModel } from './frame.model';

export const frameController = {
    getFrame: async (req: Request, res: Response) => {
    if (!req.user) return res.status(401).json({ error: 'Unauthorized' });

    const frame = await frameModel.getUserFrame(req.user.userId);

    if (!frame) {
      return res.status(404).json({ error: 'Frame not found' });
    }

    res.json(frame);
  },

  updateFrame: async (req: Request, res: Response) => {
    try {
      if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
      const userId = req.user.userId;

      const { title } = req.body;

      const frame = await frameModel.getUserFrame(userId);
      if (!frame) {
        return res.status(404).json({ error: 'Frame not found' });
      }

      const updatedFrame = await frameModel.updateFrame(frame.id, title);

      res.status(200).json(updatedFrame);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  },
};
