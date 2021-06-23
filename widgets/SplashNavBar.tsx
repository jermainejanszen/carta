import styles from '../styles/widgets/SplashNavBar.module.css';

interface Props {
    
}

const SplashNavBar = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="./logo.svg" />
            </div>
            <div className={styles.buttons}>
                <button>Home</button>
                <button>Contact</button>
                <button>About</button>
                <button>Log in</button>
                <button>Register</button>
            </div>
        </div>
    )
}

export default SplashNavBar
