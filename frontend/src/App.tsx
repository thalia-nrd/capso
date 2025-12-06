import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Register from './app/pages/auth/RegisterPage';
import Login from './app/pages/auth/LoginPage';
import Frame from './app/pages/main/Frame';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Frame />} />
    </Routes>
  );
}

export default App;