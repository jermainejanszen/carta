import { useRouter } from 'next/router';
import SplashNavBar from '../../widgets/SplashNavBar';
import styles from '../../styles/Login.module.scss';

interface Props {
    
}

const Login = (props: Props) => {

  const router = useRouter();

  const handleLogin = () => {
    router.push('/projects');
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SplashNavBar />
      </header>
      
      <div className={styles.card}>
        <h2>Log in</h2>
        
        <form className={styles.form} action="" id="login-form">
          <input placeholder="Username" type="text" name="username" />
          <input placeholder="Password" type="password" name="password" />
        </form>
        
        <p className={styles.forgotPass}>forgot password?</p>
        
        <input 
          className={styles.button} 
          type="button" 
          form="login-form" 
          value="Log in"
          onClick={handleLogin} />
      </div>
    </div>
  )
}

export default Login
