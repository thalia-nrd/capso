import React from 'react';
import * as z from 'zod';
import { login } from '../../services/authService';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import './Auth.scss';

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export type loginSchemaType = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const form = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const submitLogin = (data: loginSchemaType) => {
    try {
      login(data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(submitLogin)} className="form">
        <img className="form-image" src="../ui/flowerSticker3.png" alt="" />
        <h1 className="form-title">Login</h1>

        <div className="form-group">
          <label className="form-label">email</label>
          <input type="email" className="form-input" {...form.register('email')} />
        </div>

        <div className="form-group">
          <label className="form-label">password</label>
          <input type="password" className="form-input" {...form.register('password')} />
        </div>

        <div className="form-group">
          <button type="submit" className="form-button">Login</button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Login;