import SplashNavBar from "../../widgets/SplashNavBar";
import styles from "../../styles/Register.module.scss";

interface Props {
    
}

const Register = (props: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SplashNavBar />
      </header>
      
      <div className={styles.card}>
        <h2>Register</h2>
        
        <form className={styles.form} action="" id="register-form">
          <div>
            <input 
              placeholder="First Name" 
              type="text" 
              name="firstname" 
              autoCorrect="off" />
            <input 
              placeholder="Last Name" 
              type="text" 
              name="lastname" 
              autoCorrect="off" />
          </div>
          <input 
            placeholder="Email Address" 
            type="email" 
            name="email" />
          <input 
            placeholder="Password" 
            type="password" 
            name="password" 
            autoComplete="off" />
          <input 
            placeholder="Confirm Password" 
            type="password" 
            name="confirmpassword" 
            autoComplete="off" />
        </form>
        
        <p className={styles.forgotPass}>forgot password?</p>
        
        <input className={styles.button} type="button" form="register-form" value="Register" />
      </div>
    </div>
  )
}

export default Register

