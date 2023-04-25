import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstWrapper from './components/Wrappers/FirstWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstWrapper />
  </React.StrictMode>
);

