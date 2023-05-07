import React from 'react';
import classes from './Header.module.sass';
import Navbar from 'components/Navbar/Navbar';

const Header = () => {
  return (
    <>
    <header className={`${classes.header}`}>
        <div className={`container ${classes.nav}` }>
          <a href="#" className={`logo ${classes.logo}`}>ADA</a>
          <Navbar classType={classes.navHeader}/>
        </div>
    </header>
    </>
  )
}

export default Header
