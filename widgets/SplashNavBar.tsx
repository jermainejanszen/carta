import { useRouter } from 'next/router';
import Button from '../components/Button';
import styles from '../styles/widgets/SplashNavBar.module.scss';

interface Props {
    
}

const SplashNavBar = (props: Props) => {

  const router = useRouter();

  const handleLoginClick = (e) => {
    e.preventDefault();
    router.push('/login');
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="./logo.svg" />
      </div>
      <div className={styles.buttons}>
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">Contact</Button>
        <Button variant="ghost">About</Button>
        <Button variant="outlined" onClick={handleLoginClick}>Log in</Button>
        <Button>Register</Button>
      </div>
    </div>
  )
}

export default SplashNavBar
