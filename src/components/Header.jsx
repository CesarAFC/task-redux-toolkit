import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import { Container } from "@mui/material";

const Header = () => {
    const tasks = useSelector(state => state.task);
    let location = useLocation();

  return (
    <header>
      <Container>
        <h1>Total Tasks {tasks.length}</h1>
        {location.pathname !== "/" ? null : (
          <Link to="/create">Create new</Link>
        )}
      </Container>
    </header>
  );
}

export default Header