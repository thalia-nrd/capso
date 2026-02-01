import 'express';

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: number;
        email?: string; // optional, add more fields if needed
      };
      frameId?: number;
    }
  }
}