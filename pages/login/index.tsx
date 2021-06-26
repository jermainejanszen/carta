import SplashNavBar from '../../widgets/SplashNavBar';
import styles from '../../styles/Login.module.scss';

interface Props {
    
}

const Login = (props: Props) => {
    return (
        
        <div className={styles.container}>
        <header className={styles.header}>
        <SplashNavBar />
        </header>
        
        <div className={styles.card}>
            
            <h2>Log in</h2>
            
            <form className={styles.form} action="">
            <input placeholder="Username" type="text" name="Username" id="name"></input>
            <br/>
            <br/>
            <input placeholder="Password" type="text" name="Password" id="name"></input>
            
            </form>
            <p className={styles.forgotPass}>forgot password?</p>

            <button className={styles.button}>Log in</button>
        </div>

        </div>
    )
}

export default Login
