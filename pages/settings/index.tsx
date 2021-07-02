import ProfileNavBar from '../../widgets/ProjectsNavBar';
import styles from '../../styles/Settings.module.scss';

interface Props {
    
}

const Settings = (props: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ProfileNavBar hideSearch />
      </header>
      <main className={styles.main}>
        
        <div className={styles.accountsettings}>
          <h1>
            Account Settings
          </h1>
          <form className={styles.form} action="" >
            <div className={`${styles.accounts} ${styles.formGroup}`}>
              <label htmlFor="name">
                Account Name
              </label>
              <input placeholder="Account Name" type="text" name="name" />
              <p>
                Your name will be visible to teamates and other collaborators.
              </p>
            </div>
          
          
          
            <div className={`${styles.bio} ${styles.formGroup}`}>
              <label htmlFor="bio">
                Bio
              </label>
              <textarea placeholder="I like turtles." name="bio" rows={5} cols={25}/>
              <p>
                Tell us a little bit about yourself! Passions, hobbies, and achievements.
              </p>
            </div>
          
          
          
            <div className={`${styles.url} ${styles.formGroup}`}>
              <label htmlFor="URL">
                URL
              </label>
              <input placeholder="myawsomewebsite.com" type="text" name="URL" />
              <p>
                Do you have a website? Drop it here so people can go visit it!
              </p>
            </div>
          
          
            <div className={`${styles.twitter} ${styles.formGroup}`}>
              <label htmlFor="Twitter">
                Twitter
              </label>
              <input placeholder="" type="text" name="Twitter" />
              <p>
                Want some extra twitter followers?
              </p>
            </div>
          
          
            <div className={`${styles.company} ${styles.formGroup}`}>
              <label htmlFor="Company">
                Company
              </label>
              <input placeholder="" type="text" name="Company" />
              <p>
                Are you using Carta for company work?
              </p>
            </div>
            </form>
          
        </div>

      </main>
    </div>
  )
}

export default Settings
