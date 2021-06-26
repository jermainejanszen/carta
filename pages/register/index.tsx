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
          
          <form className={styles.form} action="">
            <input placeholder="Username" type="text" name="Username" id="name"></input>
            <input placeholder="Password" type="text" name="Password" id="name"></input>
          </form>
          
          <p className={styles.forgotPass}>forgot password?</p>
          
          <button className={styles.button}>Log in</button>
      </div>
    </div>
    )
}

export default Register

