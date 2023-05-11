import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addTask, editTask } from "../features/task/taskSlice";
import { v4 as uuid } from "uuid";
import { Container, Typography, Button, Box, TextField } from "@mui/material";
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
      <Button onClick={handleBack} variant="outlined">
        Back
      </Button>
      <Container >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "grid",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              name="title"
              value={task.title}
              onChange={handleChange}
            />
            <TextField
              name="description"
              label="Description"
              onChange={handleChange}
              value={task.description}
              multiline
              rows={5}
            />
            <Button type="submit" variant="contained">
              Save
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
}

export default TaskForm