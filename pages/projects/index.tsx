import ProfileNavBar from '../../widgets/ProjectsNavBar';
import ProjectCard from '../../components/ProjectCard';
import styles from '../../styles/Projects.module.scss';

const mockData = [
  {
    name: "Miscellaneous",
    hours: 43,
    tasks: 129,
    description: "Anything and everything that isn't related to a specific project."
  },{
    name: "BIO 323 Lab",
    hours: 5.8,
    tasks: 15,
    description: "Biology lab for enzyme denaturing."
  },{
    name: "Coding Project",
    hours: 28.4,
    tasks: 34,
    description: "A program that can recognize handwriting and solve matrices."
  },{
    name: "UI Design",
    hours: 16.2,
    tasks: 37,
    description: "Designing the UI for the Carta website."
  },
]

interface Props {
    
}

const Projects = (props: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ProfileNavBar />
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Projects</h1>

        <div className={styles.grid}>
          <div className={styles.newProject}>
            <h1>New Project</h1>
            <img src='/icons/plus.svg' alt='plus' />
          </div>
          {mockData.map((value, index) => <ProjectCard data={value} key={index} />)}
        </div>
      </main>
      
    </div>
  )
}

export default Projects
