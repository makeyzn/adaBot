import React from 'react'
import classes from './AccordingPage.module.sass'
import Accordion from './Accordion'

const Popup = () => {
  return (
    <section className={`${classes.popup} container`} id='developers'>
      <h1>Our team</h1>
      <hr />
      <p>Our development and testing team</p>
      <Accordion />
    </section>
  )
}

export default Popup
