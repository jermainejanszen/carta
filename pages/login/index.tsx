import SplashNavBar from '../../widgets/SplashNavBar';
import styles from '../../styles/Login.module.scss';

interface Props {
    
}

const Login = (props: Props) => {
    return (
        
        <div>
        <header className={styles.header}>
        <SplashNavBar />
        </header>
        
        <div className={styles.card}>
            
            <h2>Log in</h2>
            
            <form action="">
            <input placeholder="Username" type="text" name="Username" id="name"></input>
            <input placeholder="Password" type="text" name="Password" id="name"></input>
            </form>
            <p>forgot password</p>

            <button>Log in</button>
        </div>

        </div>
    )
}

export default Login
