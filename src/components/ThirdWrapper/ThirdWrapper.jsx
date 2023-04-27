import React from 'react';
import classes from './ThirdWrapper.module.sass';
import working from 'image/working.svg';
import dialog from 'image/dialog.svg';
import multi from 'image/multi.svg';
import open from 'image/open.svg';

const ThirdWrapper = () => {
  return (
    <section className={`${classes.thirdWrapper}`}>
        <div className="container">
            <div className={classes.title}>
                <h1>Choose the best</h1>
                <p>High-quality development and testing allow<br/>us to create the best product on the market<br/>of bots with artificial intelligence</p>
            </div>

            <div className={classes.cards}>
                <div className={classes.card}>
                    <img src={working} alt="" />
                    <div>  
                        <h2>Working offline</h2>
                        <p>Continuous work with and without an Internet<br/>connection. And automatic change of these modes</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={multi} alt="" />
                    <div>  
                        <h2>Multifunctionality</h2>
                        <p>Our bot performs quite a lot of functions, <br/>as we develop, we will add new features for<br/>both management and operation of the bot</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={dialog} alt="" />
                    <div>  
                        <h2>Dialog support</h2>
                        <p>Since our bot is built on the basis of artificial<br/> intelligence, it can maintain a dialogue with the user</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={open} alt="" />
                    <div>  
                        <h2>Open Source</h2>
                        <p>The code of our bot is as open as possible<br/>and everyone can improve it or modify it<br/> to suit their capabilities</p>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default ThirdWrapper
