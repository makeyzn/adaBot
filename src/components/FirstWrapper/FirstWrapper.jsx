import Header from 'components/Header/Header'
import React from 'react'
import classes from './FirstWrapper.module.sass'
import Cicles from 'components/UI/Cicles/Cicles'
import YouTube from 'image/YouTube.png';
import Instagram from 'image/Instagram.png';
import messanger from 'image/messanger.png';
import Discord from 'image/Discord.png';
import github from 'image/github.png';
import arrow from 'image/arrow.svg';
import working from 'image/working.svg'


const FirstWrapper = () => {
  return (
    <div className={`${classes.fw} cont-out`} id='home'>
      <div className={classes.fwContainer}>
        <div className={classes.cicles}>
          <Cicles />
          <Cicles />
          <Cicles />
        </div>
        <div className={`${classes.mainText} container`}>
          <h1>Multifunctional<br/> bot based on artificial<br/>intelligence</h1>
          <hr />
          <h2>Hell Bot, a bot based on artificial intelligence with<br/>wide possibilities for managing a smart home,<br/>smart devices and something else smart.</h2>
          <div className={classes.icons}>
            <a href=""><img src={working} alt="YouTube" /></a>
            <a href=""><img src={Instagram} alt="Instagram" /></a>
            <a href=""><img src={messanger} alt="messanger" /></a>
            <a href=""><img src={Discord} alt="Discord" /></a>
            <a href=""><img src={github} alt="github" /></a>
          </div>
          <img src={arrow} alt="arrow" className={`${classes.arrow} text-white`}/>
        </div>
      </div>
    </div>
  )
}

export default FirstWrapper;
