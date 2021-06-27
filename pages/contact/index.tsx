import SplashNavBar from '../../widgets/SplashNavBar';
import styles from '../../styles/Contact.module.scss';

interface Props {
    
}

const Contact = (props: Props) => {
  return (
    <div className={styles.container}>   
      <header className={styles.header}>
        <SplashNavBar />
      </header>

      <main className={styles.main}>
        <h1>Call us maybe</h1>
      </main>
    </div>
  )
}

export default Contact
