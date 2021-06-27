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
        <div className={styles.aboutSection} id="title">
          <h1>
            Carta
          </h1>
          <p>
            Lets change how you get things done. Collaborate and keep track of time across you projects. Carta allows users to timekeep on projects with other collegues, friends, classmates, or anybody you work with.
          </p>
        </div>
        <div className={styles.aboutSection} id="keep-track">
          <h2>
            Keep Track
          </h2>
          <p>
            Effortlessly keep track of time worked on a project with the press of a button.
          </p>
        </div>
        <div className={styles.aboutSection} id="collaborate">
          <h2>
            Collaborate
          </h2>
          <p>
            Clearly view the time spent by yourself and other teammates on different tasks for a given project
          </p>
        </div>
        <div className={styles.aboutSection} id="stay-on-top">
          <h2>
            Stay On Top
          </h2>
          <p>
            By setting reminders, time limits, and adding tags, Carta helps you stay fully organized.
          </p>
        </div>
      </main>
            
    </div>
  )
}

export default About
