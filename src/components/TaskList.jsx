import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../features/task/taskSlice';
import { Link } from 'react-router-dom';
import { Container } from "@mui/material";

const TaskList = () => {
    const tasks = useSelector(state => state.task);
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }
    return (
    <Container>
        {tasks.map( task => (
            <div key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
                <Link to={`/edit/${task.id}`} >Edit</Link>
            </div>
        ))}
    </Container>
  )
}

export default TaskList