import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
    priority: '1',
  },
  {
    id: '2',
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
    priority: '1',
  },
]

//Esto seria como el reducer de redux sin toolkit
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // Aqui van las funciones para modificar el estado
    addTask: (state, action) => [...state, action.payload],
    editTask: (state, action) => {
      const {id, title, description} = action.payload;
      const foundTask = state.find(task => task.id === id);
      if(foundTask) {
        foundTask.title= title;
        foundTask.description = description;
      }
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload)
    },
  },
});

export const {addTask, deleteTask, editTask}  = taskSlice.actions
export default taskSlice.reducer