import React from 'react';
import * as z from 'zod';
import { login } from '../../../services/authService';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import './Auth.scss';

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export type loginSchemaType = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const navigate = useNavigate();

  const form = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const submitLogin = async (data: loginSchemaType) => {
    try {
      const res = await login(data);

      console.log("Login response:", res);

      navigate(`/frame`);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
    <FormProvider {...form}>
      <div className="wrapper">
        <form onSubmit={form.handleSubmit(submitLogin)} className="form">
          <img className="form-image" src="/ui/flowerSticker3.png" alt="" />
          <h1 className="form-title">Login</h1>

          <div className="form-group">
            <label className="form-label">email</label>
            <input type="email" className="form-input" {...form.register('email')} />
          </div>

          <div className="form-group">
            <label className="form-label">password</label>
            <input type="password" className="form-input" {...form.register('password')} />
          </div>

          <div className="form-actions">
            <button type="submit" className="form-button">Login</button>

            <button
              className="form-link"
              type="button"
              onClick={() => navigate("/register")}
            >
              register
            </button>

          </div>
        </form>
      </div>
    </FormProvider>
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",       // make it full width
        fontSize: "0.7rem",
        opacity: 0.6,
        textAlign: "center",
        padding: "0.5rem 0", // optional spacing
        pointerEvents: "none" // so it doesn’t block clicks
      }}
    >
      &copy; 2025 NRD. MIT License.
    </footer>
    </>
  );
};

export default Login;