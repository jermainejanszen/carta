import { useState, useRef } from 'react';
import Button from './Button';
import styles from '../styles/components/TaskItem.module.scss';

interface Props {
  name: string,
  time: number,
  index: number,
  editName: (index: number, newName: string) => void,
}

const TaskItem = (props: Props) => {

  const nameInput = useRef(null);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(props.name);

  const secondsToHours = (seconds : number) : string => {
      const hours = Math.floor(seconds / 3600);
      let minutes = Math.floor((seconds % 3600) / 60).toString();
      if (minutes.length < 2) {
        minutes = '0' + minutes;
      }
      return `${hours}:${minutes}`;
  }

  const handleEditClick = (e) => {
    setEditMode(!editMode);
    if (editMode) {
      props.editName(props.index, name);
    }
  }

  const handleNameChange = () => {
    if (nameInput.current) {
      setName(nameInput.current.value.trim());
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.taskName}>
        {!editMode ? <h3>{name}</h3> : <input ref={nameInput} type="text" value={name} onChange={handleNameChange} />}
        <img 
          src={editMode ? "/icons/checkmark.svg" : "/icons/edit.svg"} 
          alt="edit"
          onClick={handleEditClick} />
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
