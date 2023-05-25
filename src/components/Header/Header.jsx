import React, { useState } from 'react';
import classes from './Header.module.sass';
import Navbar from 'components/Navbar/Navbar';
import YouTube from 'image/YouTube.png';
import Instagram from 'image/Instagram.png';
import messanger from 'image/messanger.png';
import Discord from 'image/Discord.png';
import github from 'image/github.png';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  const [nav, setNav] = useState(false);

  function handleClick() {
    setNav(false);
  };

  console.log(nav);
  return (
    <>
    <header className={`${classes.header} cont-out`}>
      <div className={`${classes.header__container}`}>
        <a href="#" className={`logo ${classes.logo}`}>ADA</a>
        <div className={`container ${nav ? [classes.nav, classes.active].join(' ') : [classes.nav]}` }>
          <Navbar classType={classes.navHeader} handleClick={handleClick}/>
          <Link to="/account">Admin account</Link>
          <div className={classes.icons}>
            <a href=""><img src={YouTube} alt="YouTube" /></a>
            <a href=""><img src={Instagram} alt="Instagram" /></a>
            <a href=""><img src={messanger} alt="messanger" /></a>
            <a href=""><img src={Discord} alt="Discord" /></a>
            <a href=""><img src={github} alt="github" /></a>
          </div>
        </div>
        <button onClick={() => setNav(!nav)} className={classes.mobile_btn}>
          {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} />}
        </button>
      </div>
    </header>
    </>
  )
}

export default Header
