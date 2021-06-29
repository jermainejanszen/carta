import ProfileNavBar from '../../../widgets/ProjectsNavBar';
import Button from '../../../components/Button';

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
        <div className={styles.title}>
          <h1>
            Create a new project
          </h1>
          <p>
            A project tracks the various tasks that are involved and provides a breakdown of the time you've spent on each one.
          </p>
        </div>
        <div className={styles.content}>
          <label htmlFor='name'>Project name</label>
          <input 
            className={styles.projectName} 
            type='text' 
            name='name'
            autoComplete='off'
            maxLength={80} />
          <p>Great project names are short and memorable.</p>
          <label htmlFor='description'>Description</label>
          <input 
            className={styles.projectDescription}
            type='text' 
            name='description'
            autoComplete='off'
            maxLength={300} />
        </div>
        <div>
          <h2>
            Add initial tasks
          </h2>
          <Button palette="secondary" variant="outlined">Add task</Button>
        </div>
        <div>
          <Button palette="secondary">Create project</Button>
        </div>
      </main>
    </div>
  )
}

export default New
