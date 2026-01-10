import 'express';

declare module 'express' {
  export interface Request {
    user?: {
      userId: number;
    };
    frameId?: number;
  }
}