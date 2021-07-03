import { useState, useRef, useEffect } from 'react';
import Button from './Button';
import styles from '../styles/components/TaskItem.module.scss';

interface Props {
  name: string,
  time: number,
  index: number,
  editName: (index: number, newName: string) => void,
  editTime: (index: number, newTime: number) => void,
  setIsCounting: (isCounting: boolean) => void,
}

const TaskItem = (props: Props) => {

  const nameInput = useRef(null);
  const countRef = useRef(null);

  const [editMode, setEditMode] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const [name, setName] = useState(props.name);
  const [time, setTime] = useState(props.time);

  // Focuses on the name input field when edit mode is entered
  useEffect(() => {
    if (editMode && nameInput.current) {
      nameInput.current.focus();
    }
  }, [editMode])

  useEffect(() => {
    return () => {
      clearInterval(countRef.current);
    }
  }, [])

  const secondsToHours = (time : number) : string => {
      const hours = Math.floor(time / 3600);
      let minutes = Math.floor((time % 3600) / 60).toString();
      if (minutes.length < 2) {
        minutes = '0' + minutes;
      }
      let seconds = Math.floor((time % 3600) % 60).toString();
      if (seconds.length < 2) {
        seconds = '0' + seconds;
      }
      return `${hours}:${minutes}:${seconds}`;
  }

  const handleEditClick = (e) => {
    setEditMode(!editMode);
    if (editMode) {
      props.editName(props.index, name.trim());
      setName(name.trim());
    }
  }

  const handleNameChange = () => {
    if (nameInput.current) {
      setName(nameInput.current.value);
    }
  }

  const handleNameKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleEditClick(null);
    }
  }

  const handleTimeStartClick = (e) => {
    if (!isCounting) {
      setIsCounting(true);
      props.setIsCounting(true);
      countRef.current = setInterval(() => {
        setTime((time) => time + 1)
      }, 1000);
    }
  }

  const handleTimeStopClick = (e) => {
    if (isCounting) {
      clearInterval(countRef.current);
      props.editTime(props.index, time);
      setIsCounting(false);
      props.setIsCounting(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.taskName}>
        {!editMode ? 
          <h3>{name}</h3> : 
          <input 
            ref={nameInput} 
            type="text" 
            value={name} 
            onChange={handleNameChange}
            onKeyUp={handleNameKeyUp} />}
        <img 
          src={editMode ? "/icons/checkmark.svg" : "/icons/edit.svg"} 
          alt="edit"
          onClick={handleEditClick} />
      </div>
      <div className={styles.taskTime}>
        <Button 
          palette={!isCounting ? "success" : ""}
          variant="ghost"
          onClick={handleTimeStartClick} >
            Start
        </Button>
        <Button 
          palette={isCounting ? "primary" : ""} 
          variant="ghost"
          onClick={handleTimeStopClick} >
            Stop
        </Button>
        <p className={styles.time}>{secondsToHours(time)}</p>
      </div>
    </div>
  )
}

export default TaskItem
