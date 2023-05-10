import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addTask, editTask } from "../features/task/taskSlice";
import { v4 as uuid } from "uuid";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
  });
  const tasks = useSelector(state => state.task);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(params.id) {
      dispatch(editTask(task))
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    } 
    navigate('/')
  }
  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
,    })
  }

  const handleBack = () => {
    navigate(-1)
  }


 useEffect(() => {
   if(params.id) {
    setTask( tasks.find(task => task.id === params.id) );
   }
 
 }, [])
 
  return (
    <>
      <Button onClick={handleBack} variant="outlined">Back</Button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          value={task.title}
        />
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          placeholder="description"
          onChange={handleChange}
          value={task.description}
        ></textarea>
        <Button type='submit' variant="contained">Save</Button>
      </form>
    </>
  );
}

export default TaskForm