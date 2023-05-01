import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstWrapper from './components/FirstWrapper/FirstWrapper';
import SecondWrapper from 'components/SecondWrapper/SecondWrapper';
import ThirdWrapper from 'components/ThirdWrapper/ThirdWrapper';
import Swiper from 'components/Swiper/Swiper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstWrapper />
    <SecondWrapper />
    <ThirdWrapper />
    <Swiper />
  </React.StrictMode>
);

