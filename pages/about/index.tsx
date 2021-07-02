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
          <h2>
            Our mission 
          </h2>
          <p>
            Carta's main objective is to help you achieve your goals in the most efficient and informed way possible. Carta was born out of necessity, we needed a way to keep track of where we were spending our time while working on various projects. While brainstorming on what product would be most benifical to users, it became clear that there were three core elements that needed to be addressed. Firstly there needed to be a clear and simple way to accurately log time spent on specific tasks within a given project. Second was finding a way to intergrate a collaborative aspect by allowing users to delegate specific tasks to one another while also being able to view how much time was being spent on those tasks. Third was helping users organize themselves by providing the option to add tags, reminders, and deadlines to tasks to help ensure an efficient workflow.
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.aboutSection} id="keep-track">
            <div>
              <h2>
                Keep Track
              </h2>
              <p>
                Effortlessly keep track of time worked on a project with the press of a button.
              </p>
            </div>
            <img src="survey.svg" alt="scrum" />
          </div>
          <div className={styles.aboutSection} id="collaborate">
            <img src="scrum.svg" alt="scrum" />
            <div>
              <h2>
                Collaborate
              </h2>
              <p>
                Clearly view the time spent by yourself and other teammates on different tasks for a given project
              </p>
            </div>
          </div>
          <div className={styles.aboutSection} id="stay-on-top">
            <div>
              <h2>
                Stay On Top
              </h2>
              <p>
                By setting reminders, time limits, and adding tags, Carta helps you stay fully organized.
              </p>
            </div>
            <img src="ontop.svg" alt="moon" />
          </div>
        </div>
      </main>

    </div>
  )
}

export default About
