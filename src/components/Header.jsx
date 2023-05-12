import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Stack, Typography, useTheme } from "@mui/material";
import CustomizedSwitch from './Switch';

const Header = () => {
    const tasks = useSelector(state => state.task);
    let location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
  const handleCreate = () => {
    navigate("/create")
  }

  return (
    <header>
      <Container sx={{display: 'flex', flexDirection: 'column',  bgcolor: 'background.default', color: 'text.primary',}} >
        <Stack direction='row' justifyContent="space-evenly" alignItems="center">
          <Typography variant="h1">Total Tasks #{tasks.length}</Typography>
          <CustomizedSwitch />
        </Stack>
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