import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../features/task/taskSlice';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Typography, Box, Card, CardActions, CardContent, Modal } from "@mui/material";
import { useModal } from '../hooks/useModal';
import { ModalConfirmation } from './Modal';

const TaskList = () => {
    const tasks = useSelector(state => state.task);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [idToDelete, setIdToDelete] = useState(null);

    const handleDelete = () => {
        dispatch(deleteTask(idToDelete))
    }

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    const handleOpenModal = (id) => {
        openModal1();
        setIdToDelete(id);
    }

    return (
    <Container sx={{bgcolor: 'background.default', height: '100vh',}}>
        <Box sx={{display: 'grid', gridTemplateColumns: {md: '1fr 1fr 1fr', sm: '1fr'}, gap: 3, py: 3, }}>
        
        {tasks.map( task => (
            <Card key={task.id} sx={{ width: 275 }}>
                <CardContent>
                    <Typography variant='h3'>{task.title}</Typography>
                    <Typography variant="body1">{task.description}</Typography>
                </CardContent>
                <CardActions>
                    {/* <Button onClick={() => handleDelete(task.id)} variant="text" disableElevation>Delete</Button> */}
                    <Button onClick={() => handleOpenModal(task.id)} variant="text" disableElevation>Delete</Button>
                    <Button color="secondary" variant="contained" disableElevation onClick={() => handleEdit(task.id)}>Edit</Button>
                </CardActions>
            </Card>
        ))}
        </Box>

        <ModalConfirmation handleDelete={handleDelete} isOpen={isOpenModal1} closeModal={closeModal1} />
    </Container>
  )
}

export default TaskList