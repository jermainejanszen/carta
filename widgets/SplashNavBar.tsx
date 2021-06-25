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
                <Button variant="ghost">Home</Button>
                <Button variant="ghost">Contact</Button>
                <Button variant="ghost">About</Button>
                <Button variant="outlined" palette="primary">Log in</Button>
                <Button palette="primary">Register</Button>
            </div>
        </div>
    )
}

export default SplashNavBar
