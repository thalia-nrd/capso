import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Register from './app/pages/auth/RegisterPage';
import Login from './app/pages/auth/LoginPage';
import Frame from './app/pages/main/Frame';
import FrameRedirect from './app/pages/main/FrameRedirect';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/frame" element={<FrameRedirect />} />

      <Route path="/frame/:frameId" element={<Frame />} />
    </Routes>
  );
}

export default App;