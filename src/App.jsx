import './App.css'
import Header from './components/Header';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';




function App() {
  
  const darkmode = useSelector(state => state.darkmode);

  const theme = createTheme({
    typography: {
      fontFamily: ['"Montserrat"', "Open Sans"].join(","),
      h1: {
        fontSize: "6rem",
        "@media (max-width:600px)": {
          fontSize: "4rem",
        },
      },
      h3: {
        fontSize: "3rem",
        "@media (max-width:600px)": {
          fontSize: "2rem",
        },
      },
    },
    palette: {
      mode: darkmode ? 'dark' : 'light',

      primary: {
        light: "#ba68c8",
        main: "#9b27b0",
        dark: "#49148c",
        contrastText: "#ffffff",
      },
      secondary: {
        light: "#5ad57d",
        main: "#11cb5f",
        dark: "#006d00",
        contrastText: "#ffffff",
      },
    },
  });

  return (
    <>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
          </Routes>
        </ThemeProvider>
      </HashRouter>
    </>
  );
}

export default App
