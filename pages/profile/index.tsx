import ProfileNavBar from '../../widgets/ProjectsNavBar';
import styles from '../../styles/Profile.module.scss';

interface Props {
    
}

const Profile = (props: Props) => {
  return (
    <div className={styles.container}>
        <header className={styles.header}>
          <ProfileNavBar hideSearch />
        </header>

        <main className={styles.main}>
        <div className={styles.grid}>
          <div>
            <div className={styles.profilePic}>
              <img src="/cofounder1.jpg" alt="pog" />
            </div>

            <div className={styles.userInfo}>
              <h2>
                Alexcrocrox
              </h2>
              <div className={styles.company}>
                <img src="/icons/job.svg" alt="company" />
                <h4>
                  Carta
                </h4>
              </div>
              <div className={styles.website}>
                <img src="/icons/website.svg" alt="website" />
                <h4>
                  Carta.co
                </h4>
              </div>
              <div className={styles.twitter}>
                <img src="/icons/twitter.svg" alt="website" />
              <h4>
                alexcrocrox@twitter.com
              </h4>
              </div>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.statsGroup}>
              <div>
                <h2>
                  Personal statistics
                </h2>
                  <div className={`${styles.tasks} ${styles.statsGroup}`}>
                    <img src="/icons/tick.svg" alt="nike" />
                    <div>
                      <h3>
                        15
                      </h3>
                      <p>Tasks completed</p>
                    </div>
                  </div>
                  <div className={`${styles.projComp} ${styles.statsGroup}`}>
                    <img src="/icons/project.svg" alt="nike" />
                    <div>
                      <h3>
                        23
                      </h3>
                      <p>Projects completed</p>
                    </div>
                  </div>
                  <div className={`${styles.timeSpent} ${styles.statsGroup}`}>
                    <img src="/icons/time.svg" alt="nike" />
                    <div>
                      <h3>
                        23hrs
                      </h3>
                      <p>Total time spent</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        </main>
    </div>
  )
}

export default Profile
