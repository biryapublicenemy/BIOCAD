import React from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from './App.tsx';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
