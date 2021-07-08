import SplashNavBar from "../../widgets/SplashNavBar";
import Button from "../../components/Button";
import styles from "../../styles/Register.module.scss";

interface Props {
    
}

const Register = (props: Props) => {

  const handleRegister = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SplashNavBar />
      </header>
      
      <div className={styles.card}>
        <h2>Register</h2>
        
        <form 
          className={styles.form} 
          action="" 
          id="register-form">

          <div className={styles.formName}>
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
        
          <p className={styles.forgotPass}>forgot password?</p>

          <Button
            palette="primary"
            onClick={handleRegister}>
            Register
          </Button>

        </form>
      </div>
    </div>
  )
}

export default Register

