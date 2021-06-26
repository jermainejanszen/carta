import Head from 'next/head'
import SplashNavBar from '../widgets/SplashNavBar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <SplashNavBar />
      </header>

      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <div>
            <h1 className={styles.title}>
              Carta
            </h1>
            <h2>
              Lets change how you get things done.
            </h2>
          </div>
          <img src="/study.svg" alt="study" />
        </div>

        <div className={styles.descriptionContainer} >
          <h2>
            Collaborate and keep track of time across you projects.
          </h2>
          <p>
            Carta allows users to timekeep on projects with other collegues, friends, classmates, or anybody you work with. 
          </p>
          <div className={styles.grid}>

            <a className={styles.card}>
              <img src="/icons/clock.svg" alt="ticktok" />
              <h3>Keep Track</h3>
              <p>Effortlessly keep track of time worked on a project with the press of a button.</p>
              <a>Learn more &#x2192;</a>
            </a>

            <a className={styles.card}>
              <img src="/icons/collaborate.svg" alt="2 dudes" />
              <h3>Collaborate</h3>
              <p>Clearly view the time spent by yourself and other teammates on different tasks for a given project</p>
              <a>Learn more &#x2192;</a>
            </a>

            <a className={styles.card}>
              <img src="/icons/check.svg" alt="nike" />         
              <h3>Stay On Top </h3>
              <p>
                By setting reminders, time limits, and adding tags, Carta helps you stay fully organized.
              </p>
              <a>Learn more &#x2192;</a>
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>
          Alex and Jermaine
        </a>
      </footer>
    </div>
  )
}
