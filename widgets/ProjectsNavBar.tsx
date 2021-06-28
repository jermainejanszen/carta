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
        <Button variant="ghost" onClick={handleProfileClick}>Profile</Button>
      </div>
    </div>
  )
}

export default ProfileNavBar
