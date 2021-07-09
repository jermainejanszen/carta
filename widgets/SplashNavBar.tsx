import { useRouter } from 'next/router';
import { Button, ButtonGroup } from '@chakra-ui/react';
import styles from '../styles/widgets/NavBar.module.scss';

interface Props {
    
}

const SplashNavBar = (props: Props) => {

  const router = useRouter();

  const handleHomeClick = (e) => {
      e.preventDefault();
      router.push('/');
  }

  const handleAboutClick = (e) => {
    e.preventDefault();
    router.push('/about');
  }

  const handleLoginClick = (e) => {
    e.preventDefault();
    router.push('/login');
  }

  const handleRegisterClick = (e) => {
    e.preventDefault();
    router.push('/register');
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="logo" onClick={handleHomeClick} />
      </div>
      <ButtonGroup>
        <Button variant="ghost" onClick={handleHomeClick}>Home</Button>
        <Button variant="ghost" onClick={handleAboutClick}>About</Button>
        <Button variant="ghost" onClick={handleLoginClick}>Log in</Button>
        <Button variant="primary" onClick={handleRegisterClick} >
          Register
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default SplashNavBar
