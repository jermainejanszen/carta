import SplashNavBar from '../../widgets/SplashNavBar';
import styles from '../../styles/About.module.scss';

interface Props {
    
}

const About = (props: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SplashNavBar />
      </header>
      
      <main className={styles.main}>
        <div id="title">
          <h1>
            Carta
          </h1>
          <p>
            Description
          </p>
        </div>
        <div id="keep-track">
          <h2>
            Keep Track
          </h2>
          <p>
            Description
          </p>
        </div>
        <div id="collaborate">
          <h2>
            Collaborate
          </h2>
          <p>
            Description
          </p>
        </div>
        <div id="stay-on-top">
          <h2>
            Stay On Top
          </h2>
          <p>
            Description
          </p>
        </div>
      </main>
            
    </div>
  )
}

export default About
