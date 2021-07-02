import Button from './Button';
import styles from '../styles/components/TaskItem.module.scss';

interface Props {
  name: string,
  time: number,
}

const TaskItem = (props: Props) => {

  const secondsToHours = (seconds : number) : string => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      return `${hours}:${minutes}`;
  }

  return (
    <div className={styles.container}>
      <h3>{props.name}</h3>
      <div>
        <Button palette="primary" variant="outlined">Start</Button>
        <Button palette="primary" variant="outlined">Stop</Button>
        <p className={styles.time}>{secondsToHours(props.time)}</p>
      </div>
    </div>
  )
}

export default TaskItem
