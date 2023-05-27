import React from 'react'
import classes from './SignIn.module.sass'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <section className={`cont-out ${classes.signWrapper}`}>
      <Link to='/' className={`logo ${classes.signWrapper__logo}`}>ADA</Link>
      <hr />
      <div className={classes.signWrapper__formContainer}>
        <form action="">
            <h1>Sign in</h1>
            <h2>Only for administrators</h2>
            <input type="email" placeholder='Email' pattern=".+@globex\.com" size="30" required id="email"/>
            <input type="password" id="userPassword" placeholder='Password'/>
            <button>Sign in</button>
        </form>
      </div>
    </section>
  )
}

export default SignIn
