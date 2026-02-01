import React from 'react';
import * as z from 'zod';
import { register } from '../../../services/authService';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import './Auth.scss';

export const registerSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  password: z.string().min(6),
});

export type registerSchemaType = z.infer<typeof registerSchema>;

const Register = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const submitRegister = async (data: any) => {
    try {
      const newUser = await register(data);
      navigate(`/frame`);
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Registration failed");
    }
  };

  return (
    <>
    <FormProvider {...form}>
      <div className="wrapper">
        <form onSubmit={form.handleSubmit(submitRegister)} className="form">
          <img className="form-image" src='/ui/flowerSticker.png' alt="Flower Sticker" />
          <h1 className="form-title">Register</h1>

          <div className="form-group">
            <label className="form-label">name</label>
            <input type="text" className="form-input" {...form.register('name')} />
          </div>

          <div className="form-group">
            <label className="form-label">email</label>
            <input type="email" className="form-input" {...form.register('email')} />
          </div>

          <div className="form-group">
            <label className="form-label">password</label>
            <input type="password" className="form-input" {...form.register('password')} />
          </div>

          <div className="form-actions">
            <button type="submit" className="form-button">register</button>

            <button
              className="form-link"
              type="button"
              onClick={() => navigate("/login")}
            >
              login
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
        width: "100%",
        fontSize: "0.7rem",
        opacity: 0.6,
        textAlign: "center",
        padding: "0.5rem 0",
        pointerEvents: "none"
      }}
    >
      &copy; 2025 NRD. MIT License.
    </footer>
    </>
  );
}

export default Register;