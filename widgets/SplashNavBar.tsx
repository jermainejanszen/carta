import Button from '../components/Button';
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
                <Button>Home</Button>
                <Button>Contact</Button>
                <Button>About</Button>
                <Button>Log in</Button>
                <Button>Register</Button>
            </div>
        </div>
    )
}

export default SplashNavBar
