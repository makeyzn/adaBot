import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstWrapper from './components/FirstWrapper/FirstWrapper';
import SecondWrapper from 'components/SecondWrapper/SecondWrapper';
import ThirdWrapper from 'components/ThirdWrapper/ThirdWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstWrapper />
    <SecondWrapper />
    <ThirdWrapper />
  </React.StrictMode>
);

