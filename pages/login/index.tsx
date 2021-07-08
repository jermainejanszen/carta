import { useRouter } from 'next/router';
import SplashNavBar from '../../widgets/SplashNavBar';
import Button from '../../components/Button';
import styles from '../../styles/Login.module.scss';

interface Props {
    
}

const Login = (props: Props) => {

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/projects');
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SplashNavBar />
      </header>
      
      <div className={styles.card}>
        <h2>Log in</h2>
        
        <form 
          className={styles.form} 
          action="" 
          id="login-form" 
          onSubmit={handleLogin}>
            
          <input placeholder="Username" type="text" name="username" />
          <input placeholder="Password" type="password" name="password" />
        
          <p className={styles.forgotPass}>forgot password?</p>
          
          <Button
            palette="primary"
            onClick={handleLogin} >
              Log in
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
