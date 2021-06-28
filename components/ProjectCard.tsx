import styles from '../styles/components/ProjectCard.module.scss';

interface Data {
  name: string,
  hours: number,
  tasks: number,
  description: string,
}

interface Props {
  data: Data,
  color: number,
}

const ProjectCard = (props: Props) => {

  const colors = ["#BAE7ED", "#B0FF94", "#638695", "#F98E8E"];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div style={{background: colors[props.color % colors.length]}}></div>
        <h2>{props.data.name}</h2>
      </div>
      <div className={styles.main}>
        <h4>{props.data.hours} hours</h4>
        <h4>{props.data.tasks} tasks</h4>
        <p>
          {props.data.description.substring(0, 120)}
          {props.data.description.length > 120 ? "..." : ""}</p>
      </div>
    </div>
  )
}

export default ProjectCard
