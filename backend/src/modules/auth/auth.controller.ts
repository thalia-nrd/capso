import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { authModel } from './auth.model';
import { hashPassword, comparePassword } from '../../utils/bcrypt';
import { setAuthCookie, clearAuthCookie } from '../../utils/cookies';
import { signupSchema, loginSchema } from './auth.schema';
import { frameModel } from '../frame/frame.model';

const JWT_SECRET = process.env.JWT_SECRET!;

export const authController = {
  signup: async (req: Request, res: Response) => {
    try {
      const parsed = signupSchema.safeParse(req.body);
      if (!parsed.success) return res.status(400).json({ errors: parsed.error.issues });

      const { name, email, password } = parsed.data;

      const existingUser = await authModel.findUserByEmail(email);
      if (existingUser) return res.status(400).json({ error: 'User already exists' });

      const hashedPassword = await hashPassword(password);
      const newUser = await authModel.createUser(name, email, hashedPassword);

      // create frame for new user
      const defaultTitle = `${name}'s Frame`;
      const newFrame = await frameModel.createFrame(newUser.id, defaultTitle);

      const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, {
        expiresIn: '7d',
      });

      setAuthCookie(res, token);

      res.status(201).json({
        message: 'User created successfully',
        userId: newUser.id,
        frame: newFrame,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const parsed = loginSchema.safeParse(req.body);
      if (!parsed.success) return res.status(400).json({ errors: parsed.error.issues });

      const { email, password } = parsed.data;

      const user = await authModel.findUserByEmail(email);
      if (!user) return res.status(400).json({ error: 'Invalid email or password' });

      const [isPasswordValid, frame] = await Promise.all([
        comparePassword(password, user.password),
        frameModel.getUserFrame(user.id),
      ]);
      if (!isPasswordValid) return res.status(400).json({ error: 'Invalid email or password' });

      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: '7d',
      });
      setAuthCookie(res, token);

      res.json({ message: 'Login successful', userId: user.id, frame });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  logout: (_req: Request, res: Response) => {
    clearAuthCookie(res);
    res.json({ message: 'Logged out successfully' });
  },
};
