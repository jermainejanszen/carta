import ProfileNavBar from '../../../widgets/ProjectsNavBar';
import styles from '../../../styles/New.module.scss';

interface Props {
    
}

const New = (props: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ProfileNavBar />
      </header>
        
      <main className={styles.main}>
        
      </main>
    </div>
  )
}

export default New
