import Button from '../components/Button';
import styles from '../styles/widgets/SplashNavBar.module.scss';

interface Props {
    
}

const SplashNavBar = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="./logo.svg" />
            </div>
            <div className={styles.buttons}>
                <Button variant="ghost" palette="primary">Home</Button>
                <Button variant="ghost" palette="primary">Contact</Button>
                <Button variant="ghost" palette="primary">About</Button>
                <Button variant="outlined" palette="primary">Log in</Button>
                <Button palette="primary">Register</Button>
            </div>
        </div>
    )
}

export default SplashNavBar
