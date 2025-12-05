import React from 'react';
import './App.scss';
import Register from './app/pages/RegisterPage';
import Login from './app/pages/LoginPage';
import Frame from './app/pages/Frame';
import ChecklistItem from './items/checklist/component/ChecklistItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Frame />
      </header>
    </div>
  );
}

export default App;
