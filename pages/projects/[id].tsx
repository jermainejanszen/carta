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
      id: 1,
      name: "Tensor Flow",
      time: 37368,
    },{
      id: 2,
      name: "Integrating Matrix Solver",
      time: 15132,
    },{
      id: 3,
      name: "Writing Matrix Solver",
      time: 10440,
    },{
      id: 4,
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
  const [editMode, setEditMode] = useState(false);
  const [isCounting, setIsCounting] = useState(false);

  const handleAddTaskClick = (e) => {
    e.preventDefault();
    setTasks(tasks.concat([{
      id: Date.now(), 
      name: `Task ${tasks.length + 1}`, 
      time: 0}]));
  }

  const handleEditTaskName = (index: number, newName: string) => {
    let newTasks = [...tasks];
    newTasks[index] = {...newTasks[index], name: newName};
    setTasks(newTasks);
  }

  const handleEditTaskTime = (index: number, newTime: number) => {
    let newTasks = [...tasks];
    newTasks[index] = {...newTasks[index], time: newTime};
    setTasks(newTasks);
  }

  const handleEditModeClick = (e) => {
    setEditMode(!editMode);
  }

  const handleDeleteItemClick = (index: number) => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1)
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
            {tasks.length === 0 && <h3>No Tasks</h3>}
            {tasks.map((value, index) => {
              return (
              <div key={value.id} >
                <TaskItem 
                  name={value.name} 
                  time={value.time}
                  index={index} 
                  editName={handleEditTaskName}
                  editTime={handleEditTaskTime}
                  setIsCounting={setIsCounting} />
                  {editMode && 
                    <img 
                      src="/icons/cancel.svg" 
                      alt="cancel"
                      onClick={(e) => handleDeleteItemClick(index)} />}
              </div>
              )}
            )}
          </div>
          <div className={styles.taskActions}>
            <Button 
              onClick={handleAddTaskClick} 
              palette="secondary" 
              variant="outlined">
                Add Task
            </Button>
            <Button 
              onClick={handleEditModeClick}
              variant="outlined">
                Edit
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Project
