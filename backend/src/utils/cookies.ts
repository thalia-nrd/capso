import { Response } from 'express';

export const setAuthCookie = (res: Response, token: string) => {
  res.cookie('authToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // true on prod (HTTPS)
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', 
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    path: '/',
  });
};

export const clearAuthCookie = (res: Response) => {
  res.clearCookie('authToken', { path: '/' });
};