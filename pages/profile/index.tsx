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
          
        </main>
    </div>
  )
}

export default Profile
