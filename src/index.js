import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstWrapper from './components/FirstWrapper/FirstWrapper';
import SecondWrapper from 'components/SecondWrapper/SecondWrapper';
import ThirdWrapper from 'components/ThirdWrapper/ThirdWrapper';
import Swiper from 'components/Swiper/Swiper';
import AccordionPage from './components/Accordion/AccordionPage';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <ThemeProvider>
          <Header />
          <FirstWrapper />
          <SecondWrapper />
          <ThirdWrapper />
          <Swiper />
          <AccordionPage />
          <Footer />
        </ThemeProvider>
  </React.StrictMode>
);

