import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore: SCSS side-effect import has no type declarations in this project setup
import './global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom'; // <-- switch from BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);

reportWebVitals();