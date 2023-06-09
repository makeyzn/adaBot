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
        <Link to='/' className={`logo ${classes.logo}`}>ADA</Link>
        <div className={`container ${classes.nav}` }>
          <Navbar classType={nav ? [classes.navHeader, classes.active].join(' ') : [classes.navHeader]} handleClick={handleClick}/>
          <div className={nav ? [classes.icons, classes.active].join(' ') : [classes.icons]}>
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
        <Link to="/account" className="adminBtn">Admin account</Link>
      </div>
    </header>
    </>
  )
}

export default Header
