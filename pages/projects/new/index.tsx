import { useState, useRef } from 'react';
import ProfileNavBar from '../../../widgets/ProjectsNavBar';
import Button from '../../../components/Button';

import styles from '../../../styles/New.module.scss';

interface Props {
    
}

const New = (props: Props) => {

  const [tasks, setTasks] = useState([]);
  const taskInput = useRef(null);

  const handleAddTaskClick = () => {
    if(taskInput.current) {
      const newTask : string = taskInput.current.value.trim();
      if(newTask.length > 0) {
        setTasks(tasks.concat([newTask]))
      }
      taskInput.current.value = "";
      taskInput.current.focus();
    }
  }

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
          <div>
            {tasks.map((value, index) => {
              return (
                <div className={styles.taskCard} key={index}>
                  <p>{value}</p>
                  <img src="/icons/cancel.svg" alt="remove"
                    onClick={() => {
                      let newTasks = [...tasks];
                      newTasks.splice(index, 1);
                      setTasks(newTasks);
                    }} />
                </div>
              )
            })}
          </div>
          <form 
            className={styles.taskInput} 
            onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="task"
              maxLength={300}
              ref={taskInput} />
            <Button
              type="submit"
              palette="secondary" 
              variant="outlined"
              onClick={handleAddTaskClick}>Add task</Button>
          </form>
        </div>
        <div>
          <Button palette="secondary">Create project</Button>
        </div>
      </main>
    </div>
  )
}

export default New
