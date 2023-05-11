import './App.css'
import Header from './components/Header';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Montserrat"', 'Open Sans'
    ].join(','),
  },
  palette: {
    primary: {
      light: '#ba68c8',
      main: '#9b27b0',
      dark: '#49148c',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#5ad57d',
      main: '#11cb5f',
      dark: '#006d00',
      contrastText: '#ffffff',
    },
  },
});

function App() {

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App
