import Button from './Button';
import styles from '../styles/components/TaskItem.module.scss';

interface Props {
  name: string,
  time: number,
}

const TaskItem = (props: Props) => {

  const secondsToHours = (seconds : number) : string => {
      const hours = Math.floor(seconds / 3600);
      let minutes = Math.floor((seconds % 3600) / 60).toString();
      if (minutes.length < 2) {
        minutes = '0' + minutes;
      }
      return `${hours}:${minutes}`;
  }

  return (
    <div className={styles.container}>
      <div className={styles.taskName}>
        <h3>{props.name}</h3>
        <img src="/icons/edit.svg" alt="edit" />
      </div>
      <div className={styles.taskTime}>
        <Button palette="success" variant="ghost">Start</Button>
        <Button palette="primary" variant="ghost">Stop</Button>
        <p className={styles.time}>{secondsToHours(props.time)}</p>
      </div>
    </div>
  )
}

export default TaskItem
