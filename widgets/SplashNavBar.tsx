import { useRouter } from 'next/router';
import Button from '../components/Button';
import styles from '../styles/widgets/SplashNavBar.module.scss';

interface Props {
    
}

const SplashNavBar = (props: Props) => {

  const router = useRouter();

  const handleHomeClick = (e) => {
      e.preventDefault();
      router.push('/');
  }

  const handleLoginClick = (e) => {
    e.preventDefault();
    router.push('/login');
  }
 
  const handleRegisterClick = (e) => {
    e.preventDefault();
    router.push('/register');
  }

  const handleAboutClick = (e) => {
    e.preventDefault();
    router.push('/about');
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="./logo.svg" alt="logo" onClick={handleHomeClick} />
      </div>
      <div className={styles.buttons}>
        <Button variant="ghost" onClick={handleHomeClick}>Home</Button>
        <Button variant="ghost">Contact</Button>
        <Button variant="ghost" onClick={handleAboutClick}>About</Button>
        <Button variant="ghost" onClick={handleLoginClick}>Log in</Button>
        <Button palette="primary" onClick={handleRegisterClick}>Register</Button>
      </div>
    </div>
  )
}

export default SplashNavBar
