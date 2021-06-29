import { useRouter } from 'next/router';
import Button from '../components/Button';
import styles from '../styles/widgets/NavBar.module.scss';

interface Props {
    
}

const ProfileNavBar = (props: Props) => {

  const router = useRouter();

  const handleHomeClick = (e) => {
      e.preventDefault();
      router.push('/projects');
  }
  
  const handleProfileClick = (e) => {
    e.preventDefault();
    router.push('/profile');
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="./logo.svg" alt="logo" onClick={handleHomeClick} />
      </div>
      <div className={styles.buttons}>
        <input type="text" placeholder="Search Projects..." />
        <div>
          <img
            src="./avatar.svg" 
            alt="logo" 
            onClick={handleProfileClick} />
          <div className={styles.dropdown}>
            <img
              src="./icons/expand-arrow.svg" 
              alt="dropdown" />
            <div className={styles.dropdownContent}>
              <p>Jerchael</p>
              <a href="/profile">My Profile</a>
              <a href="/projects">My Projects</a>
              <a href="/settings">Settings</a>
              <a href="/">Sign Out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileNavBar
