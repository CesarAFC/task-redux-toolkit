import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/task/taskSlice';


export const store = configureStore({
    reducer: {
        task: tasksReducer,
    },
})
