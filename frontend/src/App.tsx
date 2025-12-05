import React from 'react';
import './App.scss';
import Register from './app/pages/auth/RegisterPage';
import Login from './app/pages/auth/LoginPage';
import Frame from './app/pages/main/Frame';
import ChecklistItem from './items/checklist/component/ChecklistItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Register />
      </header>
    </div>
  );
}

export default App;
