import React from 'react';
import classes from './Footer.module.sass';
import Navbar from 'components/Navbar/Navbar';

const Footer = () => {
  return (
    <footer className={`${classes.footer} cont-out`} id='contacts'>
      <a href="#" className={`${classes.logo} logo`}>ADA</a>
      <div className='container'>
        <div className={`${classes.footer__container} container`}>
          <div className={classes.footer__container_left}>
            <Navbar classType={classes.navbar}/>
            <a href={`mailto:Playmister00@gmail.com`} className={classes.footer__container_mail}>Playmister00@gmail.com</a>
          </div>
          <div>
            <h2>
              Leave us a message if <br/>you find an error on the <br/>website or in the bot
            </h2>
            <form action="" className={classes.form}>
              <input type="text" placeholder='Name'/>
              <input type="text" placeholder='Telephone (Optional)'/>
              <input type="text" placeholder='Your message'/>
              <button>To send</button>
            </form>
          </div>
        </div>
        <div className={classes.footer__letter}>
          <p>© Все права соблюдены.   Копирование материалов с сайта разрешается только с указанием ссылки на источник.<br/> Этот сайт защищен reCAPTCHA и применяются <a href=''>Политика конфиденциальности</a> и <a href="">Условия обслуживания</a>  Google.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
