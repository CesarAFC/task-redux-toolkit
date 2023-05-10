import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../features/task/taskSlice';
import { Link } from 'react-router-dom';
import { Container, Button, Typography, Box } from "@mui/material";

const TaskList = () => {
    const tasks = useSelector(state => state.task);
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }
    return (
    <Container>
        <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3}}>
        {tasks.map( task => (
            <Box key={task.id} sx={{ padding: 4, borderRadius: 10}}>
                <Typography variant='h3'>{task.title}</Typography>
                <Typography variant="body1">{task.description}</Typography>
                <Button onClick={() => handleDelete(task.id)} variant="outlined">Delete</Button>
                <Link to={`/edit/${task.id}`} >Edit</Link>
            </Box>
        ))}
        </Box>
    </Container>
  )
}

export default TaskList