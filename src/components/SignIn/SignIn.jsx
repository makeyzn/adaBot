import React from 'react'
import classes from './SignIn.module.sass'

const SignIn = () => {
  return (
    <section className={`cont-out ${classes.signWrapper}`}>
      <a href="#" className={`logo ${classes.signWrapper__logo}`}>ADA</a>
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
