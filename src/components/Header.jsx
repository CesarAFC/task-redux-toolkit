import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import { Container, Typography } from "@mui/material";

const Header = () => {
    const tasks = useSelector(state => state.task);
    let location = useLocation();

  return (
    <header>
      <Container>
        <Typography variant='h1'>Total Tasks #{tasks.length}</Typography>
        {location.pathname !== "/" ? null : (
          <Link to="/create" style={{}}>Create new</Link>
        )}
      </Container>
    </header>
  );
}

export default Header