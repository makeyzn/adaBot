import React from 'react'
import classes from './SecondWrapper.module.sass'

const SecondWrapper = () => {
  return (
    <div className={`${classes.secondWrapper} container`}>
        <div className={classes.secondWrapper__leftHalf}>
            <h1>Download the Bot</h1>
            <h2>Before downloading the bot, carefully<br/>read the download and installation instructions, <br/>as well as study the technical requirements <br/>for the correct operation of the bot</h2>
            <div className={classes.info}>
                Additional information on installation can be found in the <a href="#">full instructions</a> 
            </div>
        </div>
        <div className={classes.secondWrapper__rightHalf}>
            <h3>INSTRUCTION MANUAL</h3>
            <div className={classes.cross}>
                <div className={classes.setups}>
                    <div className={classes.setup}>
                        <div className={classes.circle}/>
                        <h4>Install Python 3.9<br /><span>(Version 3.9 or higher)</span></h4>
                    </div>
                    <div className={classes.setup}>
                        <div className={classes.circle}/>
                        <h4>Launch setup file.</h4>
                    </div>
                </div>
                <hr />
                <div className={classes.downloads}>
                    <a href="#">download python</a>
                    <a href="#">download the <br />installation file</a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SecondWrapper
