import React from 'react';
import {Link} from 'react-scroll';

const Navbar = (props) => {
  return (
    <>
        <nav className={props.classType} style={{fontFamily: `var(--inter)`}} >
            <Link to="home" spy={true} smooth={true} offset={0} duration={1200} style={{cursor: 'pointer'}} onClick={props.handleClick}>Home</Link>
            <Link to="developers" spy={true} smooth={true} offset={-100} duration={ 1200} style={{cursor: 'pointer'}} onClick={props.handleClick}>Developers</Link>
            <Link to="contacts" spy={true} smooth={true} offset={0} duration={1200} style={{cursor: 'pointer'}} onClick={props.handleClick}>Contacts</Link>
        </nav>
    </>

  )
}

export default Navbar
