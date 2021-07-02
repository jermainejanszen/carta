import { useState } from 'react';
import { useRouter } from 'next/router';
import ProjectsNavBar from '../../widgets/ProjectsNavBar';
import TaskItem from '../../components/TaskItem';
import Button from '../../components/Button';

import styles from '../../styles/Project.module.scss';

interface Props {
    
}

const mockData = {
  id: "abcd",
  name: "Miscellaneous",
  hours: 43,
  tasks: [
    {
      name: "Tensor Flow",
      time: 37368,
    },{
      name: "Integrating Matrix Solver",
      time: 15120,
    },{
      name: "Writing Matrix Solver",
      time: 10440,
    },{
      name: "UI Design",
      time: 24408,
    },
  ],
  description: "Anything and everything that isn't related to a specific project."
}

const Project = (props: Props) => {

  const router = useRouter();

  const id = router.query.id;
  const [name, setName] = useState(mockData.name);
  const [description, setDescription] = useState(mockData.description);
  const [tasks, setTasks] = useState(mockData.tasks);

  const handleAddTaskClick = (e) => {
    e.preventDefault();
    setTasks(tasks.concat([{name: "New Task", time: 0}]));
  }

  const handleEditTaskName = (index: number, newName: string) => {
    let newTasks = [...tasks];
    newTasks[index] = {...newTasks[index], name: newName};
    setTasks(newTasks);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ProjectsNavBar hideSearch />
      </header>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>{name}</h1>
          <p>{description}</p>
        </div>
        
        <div>

        </div>
        
        <div className={styles.taskContainer}>
          <div className={styles.taskList}>
            {tasks.map((value, index) => <TaskItem name={value.name} time={value.time} key={index} index={index} editName={handleEditTaskName} />)}
          </div>
          <div className={styles.taskActions}>
            <Button onClick={handleAddTaskClick} palette="secondary" variant="outlined">Add Task</Button>
            <Button variant="outlined">Edit</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Project
