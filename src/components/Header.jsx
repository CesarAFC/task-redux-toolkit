import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Typography, useTheme } from "@mui/material";

const Header = () => {
    const tasks = useSelector(state => state.task);
    let location = useLocation();
    const navigate = useNavigate()
    const theme = useTheme();
  const handleCreate = () => {
    navigate("/create")
  }
  return (
    <header>
      <Container sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography variant="h1">Total Tasks #{tasks.length}</Typography>
        {location.pathname !== "/" ? null : (
          <Button variant='contained' disableElevation onClick={handleCreate}>
              Create
            </Button>
        )}
      </Container>
    </header>
  );
}

export default Header