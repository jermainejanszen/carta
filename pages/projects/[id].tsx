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

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ProjectsNavBar />
      </header>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>{mockData.name}</h1>
          <p>{mockData.description}</p>
        </div>
        
        <div>

        </div>
        
        <div className={styles.taskContainer}>
          <Button palette="secondary">Add Task</Button>
          <div className={styles.taskList}>
            {mockData.tasks.map((value, index) => <TaskItem name={value.name} time={value.time} key={index}/>)}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Project
