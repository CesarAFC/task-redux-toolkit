import './App.css'
import Header from './components/Header';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/create' element={<TaskForm />} />
          <Route path='/edit/:id' element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
