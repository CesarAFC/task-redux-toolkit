import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../features/task/taskSlice';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Typography, Box, Card, CardActions, CardContent } from "@mui/material";

const TaskList = () => {
    const tasks = useSelector(state => state.task);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }
    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }
    return (
    <Container>
        <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3, py: 3}}>
        
        {tasks.map( task => (
            <Card key={task.id} sx={{ width: 275 }}>
                <CardContent>
                    <Typography variant='h3'>{task.title}</Typography>
                    <Typography variant="body1">{task.description}</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => handleDelete(task.id)} variant="text" disableElevation>Delete</Button>
                    <Button color="secondary" variant="contained" disableElevation onClick={() => handleEdit(task.id)}>Edit</Button>
                </CardActions>
            </Card>
        ))}
        </Box>
    </Container>
  )
}

export default TaskList