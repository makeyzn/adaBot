import { ThemeProvider } from '@material-tailwind/react'
import FirstWrapper from 'components/FirstWrapper/FirstWrapper'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import SecondWrapper from 'components/SecondWrapper/SecondWrapper'
import Swiper from 'components/Swiper/Swiper'
import ThirdWrapper from 'components/ThirdWrapper/ThirdWrapper'
import AccordionPage from 'components/Accordion/AccordionPage'
import React from 'react'

const Mainpage = () => {
  return (
    <>
        <ThemeProvider>
            <Header />
            <FirstWrapper />
            <SecondWrapper />
            <ThirdWrapper />
            <Swiper />
            <AccordionPage />
            <Footer />
        </ThemeProvider>
    </>
  )
}

export default Mainpage
