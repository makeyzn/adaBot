import React from 'react'
import classes from './Header.module.sass';

const Header = () => {
  return (
    <>
    <header className={`${classes.header}`}>
        <a href="#" className={classes.logo}>ADA</a>
        <div className={`${classes.nav} container`}>
          <a href="#" className={classes.navBtn}>Home</a>
          <a href="#" className={classes.navBtn}>Developers</a>
          <a href="#" className={classes.navBtn}>Contacts</a>
        </div>
        <button>ENG</button>
    </header>
    </>
  )
}

export default Header
